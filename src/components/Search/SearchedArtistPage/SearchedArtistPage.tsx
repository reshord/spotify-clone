import { useEffect, useState } from "react";
import { useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import HeaderContent from "../../Content/HeaderContent/HeaderContent";
import Sidebar from "../../Sidebar/Sidebar";
import '../../../styles/Search/SearchedArtistPage.css'
import SongCard from "../../Content/Playlists/SongCard";
import RelatedArtistsContainer from "../RelatedArtistsContainers/RelatedArtistsContainer";
import MobileFooter from "../../Footer/MobileFooter";
import PlayerTrack from "../../PlayerTrack/PlayerTrack";
import { useNavigate } from "react-router-dom";

const SearchedArtistPage = () => {

    const {search, player, auth} = useAppSelector<RootState>(store.getState)
    const [buttonNumber, setButtonNumber] = useState<number | undefined>(-1)
    const [showAllTracks, setShowAllTracks] = useState<boolean>(false)

    const navigate = useNavigate()

    const shrotlyListArtistTracks = search.currentArtistTopTracks?.slice(0, 5)

    const newArtistTracksList = search.currentArtistTopTracks && search.currentArtistTopTracks?.length > 5 
                                ? shrotlyListArtistTracks 
                                : search.currentArtistTopTracks

    useEffect(() => {
        setShowAllTracks(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        if(!auth.token) navigate('/')
    }, [search.currentSearchedArtist]);

    return ( 
        <>
        <div className="searchedArtistPage">
            <Sidebar />
            <div className="searchedArtistBody">
                <HeaderContent />
                <div className="searchedArtistContent">
                    <div className="searchedArtistHeaderContent">
                            <img className="searchedArtistImage" src={search.currentSearchedArtist?.image} alt="" />
                            <span className="searchedArtistTitle">{search.currentSearchedArtist?.name}</span>
                    </div>
                    <div className="popularTracksSection">
                        <span className="popularTracksSectionTitle">Популярные треки</span>
                        <div className="popularTracksList">
                        {showAllTracks ? (
                            <div>
                                {search.currentArtistTopTracks?.map((track, index) => (
                                    <SongCard 
                                        setButtonNumber={(num: number) => setButtonNumber(num)}
                                        img={track.img}
                                        title={track.title}
                                        description={''}
                                        index={index}
                                        id={track.id} 
                                        number={index + 1}
                                        songNumber={0} 
                                        albumName={track.albumName} 
                                        key={index} 
                                        songAuthorId={track.songAuthorId}
                                        buttonNumber={buttonNumber}
                                        songUrl={track.songUrl}
                                        author={track.author}
                                    />
                                ))}
                            </div>
                            ) : (
                            <div>
                                {newArtistTracksList?.map((track, index) => (
                                    <SongCard 
                                        setButtonNumber={(num: number) => setButtonNumber(num)}
                                        img={track.img}
                                        title={track.title}
                                        description={''}
                                        id={track.id} 
                                        number={index + 1}
                                        index={index}
                                        songNumber={0} 
                                        albumName={track.albumName} 
                                        key={index} 
                                        songAuthorId={track.songAuthorId}
                                        buttonNumber={buttonNumber}
                                        author={track.author}
                                        songUrl={track.songUrl}
                                        
                                    />
                                ))}
                            </div>
                            )}
                            
                        </div>
                            {search.currentArtistTopTracks && search.currentArtistTopTracks?.length > 5 && (
                                <div>
                                {showAllTracks ? (
                                    <span className="allTracksBtn" onClick={() => setShowAllTracks(false)}>СВЕРНУТЬ</span>

                                 ) : (
                                    <span className="allTracksBtn" onClick={() => setShowAllTracks(true)}>ЕЩЕ</span>
                                )}
                                </div>
                            )}
                            
                    </div>
                    <audio src=""/>
                    <RelatedArtistsContainer items={search.relatedArtists} title={'Поклонникам также нравится'}/>
                </div>
            </div>
        </div>

            <MobileFooter />
            {player.currentPlayingSong && (
                <PlayerTrack />
            )}
        </>
     );
}
 
export default SearchedArtistPage;