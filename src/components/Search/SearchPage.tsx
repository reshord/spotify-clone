import HeaderContent from "../Content/HeaderContent/HeaderContent";
import Sidebar from "../Sidebar/Sidebar";
import '../../styles/Search/SearchPage.css'
import BannerToAuth from "../BannerToAuth";
import { useAppDispatch, useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import GenreCard from "./GenreCard";
import { BiSearch } from "react-icons/bi";
import MobileFooter from "../Footer/MobileFooter";
import {GrClose} from 'react-icons/gr'
import { useEffect, useState } from "react";
import SongCard from "../Content/Playlists/SongCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardMusic from "../Content/MusicContainer/CardMusic";
import { deleteSearchResults, setCurrentSearchValue } from "../../rtk/slices/Search";
import { getCurrentArtistTopTracks, getCurrentSearchArtist, getRelatedArtists, getSearched } from "../../rtk/axios";
import SearchModal from "./SearchModal";
import SearchedArtistsCard from './SearchedCards/SearchedArtistsCard'
import SpinnerLoader from '../../images/SpinnerLoader.svg'
import SearchedSongCard from "./SearchedCards/SearchedSongCard";
import PlayerTrack from "../PlayerTrack/PlayerTrack";

const SearchPage = () => {

    const searchSections = ['Все', 'Треки', 'Альбомы', 'Исполнители', 'Плейлисты']

    const {genres, auth, search, Modals} = useAppSelector<RootState>(store.getState)
    const [value, setValue] = useState<string>('')
    const [currentSection, setCurrentSection] = useState<number>(0)
    const [buttonNumber, setButtonNumber] = useState<number | undefined>(-1)

    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const {searchedAlbums, searchedArtists, searchedPlaylists, searchedTracks, currentSearchValue} = search

    const shortlyTracksList = searchedTracks?.slice(0, 4)
    const shortlyHistoryPlaylists = search.searchHistory.length > 6 
                    ? search.searchHistory.slice(0, 6) 
                    : search.searchHistory

    
    
    const toEmptyValue = () => {
        dispatch(deleteSearchResults())
        dispatch(setCurrentSearchValue(''))
        setValue('')
    }
    
    const spotifySearch = async () => {
        dispatch(getSearched({token: auth.token, value}))
        dispatch(setCurrentSearchValue(value))
    }

    const bestResultAuthorId = searchedArtists && searchedArtists[0].id

    const getArtist = () => {
        dispatch(getCurrentSearchArtist({id: bestResultAuthorId}))
        dispatch(getCurrentArtistTopTracks(bestResultAuthorId))
        dispatch(getRelatedArtists(bestResultAuthorId))
    }

    useEffect(() => {
        setCurrentSection(0)
        dispatch(deleteSearchResults())
        dispatch(setCurrentSearchValue(''))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return ( 
        <>
            <div className="SearchPageBody">
                <Sidebar />
                <main className="SearchPageContent">
                    <HeaderContent />
                    {search.searchHistory.length !== 0 && !search.currentSearchValue &&  (
                        <div className="searchHistory">
                            <div className="searchHistoryHeader">
                                {search.searchHistory.length > 6 ? (
                                    <Link className="searchHistoryLink" to={''}>История поиска</Link>
                                ) : (
                                    <span className="searchHistoryTitle">История поиска</span>
                                )}
                                {search.searchHistory.length > 1 && (
                                    <Link to={'/search/history'} className="showAllSearchHistory">ПОКАЗАТЬ ВСЕ</Link>
                                )}
                            </div>
                            <div className="searchHistoryList">
                                {shortlyHistoryPlaylists.map(el => (
                                    <CardMusic img={el.img} description={undefined} songs={search.currentSearchPlaylist.songs} type={"searchHistoryItem"} name={el.name} id={el.id}/>
                                ))}
                            </div>
                        </div>
                    )}
                    {search.currentSearchValue && (
                        <div className="searchHeaderSections">
                            {searchSections.map((el, index) => (
                                <span 
                                onClick={() => setCurrentSection(index)}
                                    className={`${currentSection === index ? 'searchSection' : 'defaultSearchSection'}`} 
                                    key={index}>
                                        {el}
                                </span>
                            ))}
                        </div>
                    )}
                    <Link to={'/search/recent'}>
                        <div className="headerSearchBlock">
                            <BiSearch
                                style={{fill: 'black', 
                                background: 'white', 
                                fontSize: 27, 
                                borderRadius: 30, 
                                marginLeft: 10,
                                position: 'absolute'
                            }}
                            />
                            <input className='SearchMusicInput' 
                                type="text" 
                                placeholder='Что хочешь послушать?'
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                onKeyUp={(enter) => {
                                    if(enter.key === 'Enter') {
                                        spotifySearch()
                                    }
                                }}
                            />
                            {value && (
                                <GrClose 
                                style={{fill: 'black', 
                                background: 'white', 
                                position: 'absolute', 
                                right: 10,
                                borderRadius: 30, 
                                fontSize: 20,
                                }}
                                onClick={() => toEmptyValue()}
                            />
                            )}
                        </div>
                    </Link>
                    <div className="searchResults">

                            {currentSection === 0 && search.currentSearchValue && (
                                <div className="allSearchSection">
                                    {searchedArtists && (
                                        <div className="bestSearchResult">
                                            <span className="bestResultTitle">Лучший результат</span>
                                            <Link to={`/artist/${searchedArtists[0].id}`} onClick={getArtist}>
                                                <div className="bestResultBlock">
                                                    <img className="bestResultImage" src={searchedArtists[0].image} alt="" />
                                                    <span className="bestResultName">{searchedArtists[0].name}</span>
                                                    <span className="executorTitle">ИСПОЛНИТЕЛЬ</span>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                {searchedTracks && (
                                    <div className="searchResultsTracksBlock">
                                        <span className="searchResultsTracksTitle">Треки</span>
                                        <div className="searchResultsTracks">
                                            {shortlyTracksList?.map(track => (
                                                <SearchedSongCard img={track.img} name={track.name} songAuthorId={track.songAuthorId} author={track.author}/>
                                            ))}
                                        </div>
                                    </div>
                                )}    
                                </div>
                            )}

                            {currentSection === 1 && (
                                <div className="allSearchedTracksList">
                                    {searchedTracks?.map((track, index) => (
                                        <SongCard 
                                            img={track.img}
                                            title={track.name}
                                            description={''}
                                            id={track.id} 
                                            number={index + 1}
                                            songNumber={0} 
                                            albumName={track.albumName} 
                                            key={index} 
                                            songAuthorId={track.songAuthorId}
                                            buttonNumber={buttonNumber}
                                            songUrl={track.songUrl}
                                        />
                                    ))}
                                </div>
                            )}
                            {currentSection === 3 && (
                                <div className="allSearchedArtistsList">
                                    {searchedArtists?.map((artist, index) => (
                                        <SearchedArtistsCard {...artist} />
                                    ))}
                                </div>
                            )}
                            {currentSection === 4 && (
                                <div className="allSearchedPlaylistsList">
                                    {searchedPlaylists?.map((playlist, index) => (
                                        <CardMusic img={playlist.image} name={playlist.name} description={playlist.description} songs={undefined} id={playlist.id} type={"searchedPlaylist"} />
                                    ))}
                                </div>
                            )}
                    </div>
                    {!search.currentSearchValue && (
                        <div className="SearchBlockContent">
                            <span>Все остальное</span>
                            <div className="genresList">
                                {genres.genresList.map((el, index: number) => (
                                    <GenreCard key={index} {...el}/>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
            {!auth.token && (
                <BannerToAuth />
              )}
            {auth.token && (
                <MobileFooter />
            )}
            {auth.token && (
                <PlayerTrack />
            )}    
        </>
     );
}
 
export default SearchPage;