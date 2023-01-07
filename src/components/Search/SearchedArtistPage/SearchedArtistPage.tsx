import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import HeaderContent from "../../Content/HeaderContent/HeaderContent";
import Sidebar from "../../Sidebar/Sidebar";
import '../../../styles/Search/SearchedArtistPage.css'
import SongCard from "../../Content/Playlists/SongCard";

const SearchedArtistPage = () => {

    const {search} = useAppSelector<RootState>(store.getState)
    const [buttonNumber, setButtonNumber] = useState<number | undefined>(-1)
    const [showAllTracks, setShowAllTracks] = useState<boolean>(false)

    const shrotlyListArtistTracks = search.currentArtistTopTracks?.slice(0, 5)

    const newArtistTracksList = search.currentArtistTopTracks && search.currentArtistTopTracks?.length > 5 
                                ? shrotlyListArtistTracks 
                                : search.currentArtistTopTracks

    const navigate = useNavigate()


    useEffect(() => {

    }, []);

    return ( 
        <div className="searchedArtistPage">
            <Sidebar />
            <div className="searchedArtistBody">
                <HeaderContent />
                <div className="searchedArtistContent">
                    <div className="searchedArtistHeaderContent">
                            <img className="searchedArtistImage" src={search.currentSearchedArtist?.image} alt="" />
                            <span className="searchedArtisTitle">{search.currentSearchedArtist?.name}</span>
                    </div>
                    <div className="popularTracksSection">
                        <span className="popularTracksSectionTitle">Популярные треки</span>
                        <div className="popularTracksList">
                        {showAllTracks ? (
                            <div>
                                {search.currentArtistTopTracks?.map((track, index) => (
                                    <SongCard 
                                        img={track.img}
                                        title={track.title}
                                        description={''}
                                        id={track.id} 
                                        number={index + 1}
                                        songNumber={0} 
                                        albumName={track.albumName} 
                                        key={index} 
                                        songAuthorId={track.songAuthorId}
                                        buttonNumber={buttonNumber}
                                    />
                                ))}
                            </div>
                            ) : (
                            <div>
                                {newArtistTracksList?.map((track, index) => (
                                    <SongCard 
                                        img={track.img}
                                        title={track.title}
                                        description={''}
                                        id={track.id} 
                                        number={index + 1}
                                        songNumber={0} 
                                        albumName={track.albumName} 
                                        key={index} 
                                        songAuthorId={track.songAuthorId}
                                        buttonNumber={buttonNumber}
                                    />
                                ))}
                            </div>
                            )}
                            
                        </div>
                        {showAllTracks ? (
                            <span className="allTracksBtn" onClick={() => setShowAllTracks(false)}>СВЕРНУТЬ</span>

                        ) : (
                            <span className="allTracksBtn" onClick={() => setShowAllTracks(true)}>ЕЩЕ</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SearchedArtistPage;