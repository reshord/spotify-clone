import { current } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { GrClose } from "react-icons/gr"
import { Link } from "react-router-dom"
import { getSearched } from "../../rtk/axios"
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/RTKHook"
import { deleteSearchResults, setCurrentSearchValue } from "../../rtk/slices/Search"
import { RootState, store } from "../../rtk/store"
import CardMusic from "../Content/MusicContainer/CardMusic"

const SearchModal = () => {
    const {genres, auth, search} = useAppSelector<RootState>(store.getState)

    const [value, setValue] = useState<string>('')
    const searchSections = ['Топ', 'Треки', 'Альбомы', 'Исполнители', 'Плейлисты']
    const [currentSection, setCurrentSection] = useState<number>(0)

    const shortlyPlaylistsList = search.searchedPlaylists?.slice(0, 4)
    const shortlyTracksList = search.searchedTracks?.slice(0, 5)


    const dispatch = useAppDispatch()

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
        setValue('')
        dispatch(setCurrentSearchValue(''))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return ( 
        <div className="searchModalBody" style={{height: `${!search.currentSearchValue ? '100vh' : ''}`}}>
            <div className="searchModalHeader" style={{height: `${search.currentSearchValue ? 140 : 60}`}}>        
                <div className="headerSearchBlock">
                        <Link to={'/'}>
                            <AiOutlineArrowLeft
                                    className='closeSearchModal'
                            />
                        </Link>
                        <div className="searchBlockInput">
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
                                value={value ? value : search.currentSearchValue}
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
                        
                </div>
                {search.currentSearchValue && (
                    <div style={{height: 50, overflow: 'scroll'}}>
                        <div className="searchHeaderSectionsModal">
                            {searchSections.map((el, index) => (
                                <span 
                                onClick={() => setCurrentSection(index)}
                                    className={`${currentSection === index ? 'searchSectioModal' : 'defaultSearchSectionModal'}`} 
                                    key={index}>
                                        {el}
                                </span>
                            ))}
                        </div>
                    </div>
                    )}
            </div>
            <div className="searchModalContent">
                {!search.currentSearchValue && (
                    <div className="withoutInputValue">
                        <span className="withoutInputValueTitle">Слушай то, что нравится</span>
                        <span className="withoutInputValueInfo">Находи исполнителей, треки, подкасты, аудиокниги и не только</span>
                     </div>
                )}
                {currentSection === 0 && search.currentSearchValue && (
                    <>
                        <div className="searchedAuthor">
                            <img className="searchedAuthorImage" src={`${search.searchedArtists && search.searchedArtists[0].image.url}`} alt="" />
                            <div className="searchedAuthorInfo">
                                <div className="searchedAuthorTitle">
                                    {search.searchedArtists && search.searchedArtists[0].name}
                                </div>
                                <div className="searchedAuthorMarker">
                                    Исполнитель
                                </div>
                            </div>
                        </div>
                        <span style={{color: 'white', fontSize: '1.25rem', fontWeight: 700}}>{search.searchedArtists && search.searchedArtists[0].name} и не только.</span>
                        <div style={{overflow: 'scroll'}}>
                            <div className="searchedPlaylistsList">
                                {shortlyPlaylistsList?.map(el => (
                                    <CardMusic description={el.description} id={el.id} img={el.image} title={el.name} songs={search.currentSearchPlaylist.songs} type={"searchedPlaylist"}/>
                                ))}
                            </div>
                        </div>
                        <div className="shortlySearchedTracksList">
                            {shortlyTracksList?.map(el => (
                                <div className="searchedTrackBody">
                                    <img src={`${el.image.url}`} alt="" />
                                    <div className="searchedTrackInfo">
                                        <span className="searchedTrackTitle">{el.name}</span>
                                        <span className="searchedTrackAbout">Трек • {el.author}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {currentSection === 1 && search.currentSearchValue && (
                    <div className="searchedTracksList">
                        {search.searchedTracks?.map(el => (
                            <div className="searchedTrackBody">
                                <img src={`${el.image.url}`} alt="" />
                                <div className="searchedTrackInfo">
                                    <span className="searchedTrackTitle">{el.name}</span>
                                    <span className="searchedTrackAbout">Трек • {el.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {currentSection === 2 && search.currentSearchValue && (
                    <div className="searchedAlbumList">
                        {search.searchedAlbums?.map(el => (
                            <div className="searchedAlbumBody">
                                <img src={`${el.image}`} alt="" />
                                <div className="searchedAlbumInfo">
                                    <span className="searchedAlbumTitle">{el.name}</span>
                                    <span className="searchedAlbumAbout">Альбом • {el.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {currentSection === 3 && search.searchedArtists && (
                    <div className="searchedArtists">
                        {search.searchedArtists?.map(el => (
                            <div className="searchedArtistsBody">
                                <img src={el?.image?.url} alt="" />
                                <div className="searchedArtistsInfo">
                                    <span className="searchedArtistsTitle">{el.name}</span>
                                    <span className="searchedArtistsAbout">Артист</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {currentSection === 4 && search.currentSearchValue && (
                    <div className="searchedPlaylistList">
                        {search.searchedPlaylists?.map(el => (
                            <div className="searchedPlaylistBody">
                                <img src={`${el.image}`} alt="" />
                                <div className="searchedPlaylistInfo">
                                    <span className="searchedPlaylistTitle">{el.name}</span>
                                    <span className="searchedPlaylistAbout">Плейлист</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default SearchModal;