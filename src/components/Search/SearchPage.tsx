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
import { getSearched } from "../../rtk/axios";
import SearchModal from "./SearchModal";

const SearchPage = () => {

    const searchSections = ['Все', 'Треки', 'Альбомы', 'Исполнители', 'Плейлисты']

    const {genres, auth, search, Modals} = useAppSelector<RootState>(store.getState)
    const [value, setValue] = useState<string>('')
    const [currentSection, setCurrentSection] = useState<number>(0)

    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const {searchedAlbums, searchedArtists, searchedPlaylists, searchedTracks, currentSearchValue} = search

    const shortlyTracksList = searchedTracks?.slice(0, 4)

    const toEmptyValue = () => {
        dispatch(deleteSearchResults())
        dispatch(setCurrentSearchValue(''))
        setValue('')
    }
    
    const spotifySearch = async () => {
        dispatch(getSearched({token: auth.token, value}))
        dispatch(setCurrentSearchValue(value))
    }

    useEffect(() => {
        if(!currentSearchValue) {
            setCurrentSection(0)
        }
    }, [currentSearchValue]);

    return ( 
        <>
            <div className="SearchPageBody">
                <Sidebar />
                <main className="SearchPageContent">
                    <HeaderContent />
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
                        {currentSection === 0 && (
                            <div className="allSearchSection">
                                {searchedArtists && (
                                    <div className="bestSearchResult">
                                        <span className="bestResultTitle">Лучший результат</span>
                                        <div className="bestResultBlock">
                                            <img className="bestResultImage" src={searchedArtists[0].image.url} alt="" />
                                            <span className="bestResultName">{searchedArtists[0].name}</span>
                                            <span className="executorTitle">ИСПОЛНИТЕЛЬ</span>
                                        </div>
                                    </div>
                                )}
                            {searchedTracks && (
                                <div className="searchResultsTracksBlock">
                                    <span className="searchResultsTracksTitle">Треки</span>
                                    <div className="searchResultsTracks">
                                        {shortlyTracksList?.map(track => (
                                            <div className="searchedSongCard">
                                                <div className="searchedSongCardInfo">
                                                    <img className="searchedSongImage" src={track.image.url} alt="" />
                                                    <div className="searchedSongInfo">
                                                        <div className="searchedSongTitle">{track.name}</div>
                                                        <div className="searchedSongAuthor">{track.author}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}    
                            </div>
                        )}
                            {currentSection === 1 && (
                                <div className="allSearchedTracksList">
                                    {searchedTracks?.map((track, index) => (
                                        <SongCard {...track} number={index}/>
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
                    {currentSection === 0 && (
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
        </>
     );
}
 
export default SearchPage;