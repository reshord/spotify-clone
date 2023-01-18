import { useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import Sidebar from "../../Sidebar/Sidebar";
import '../../../styles/Playlists/PlaylistPage.css'
import SongCard from "./SongCard";
import {useEffect, useState} from 'react'
import MobileFooter from "../../Footer/MobileFooter";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from '../../../images/SpinnerLoader.svg'
import PlayerTrack from "../../PlayerTrack/PlayerTrack";

const PlaylistPage = () => {

    const {playlists, auth, search, player} = useAppSelector<RootState>(store.getState) 
    const {currentPlaylist} = playlists


    const getAllMusicTimes = () => {
        // const test = currentPlaylist.songs?.map(el => {
        //     return +el.songTime.split(':').join('.')
        // })
        // let allSongsTime: number | undefined | string[] = test?.reduce((acc, cur) => acc + cur, 0)
        // allSongsTime = allSongsTime?.toString().split('.') 
        // if(allSongsTime && +allSongsTime[0] > 59) {

        // }
        // else if(allSongsTime && +allSongsTime[0] < 59) {
        //     allSongsTime[0] = `${parseInt(allSongsTime[0])}`
        //     allSongsTime[1] = `${parseInt(allSongsTime[1])}`
            
        // }
        // return allSongsTime?.join('.')
    }

    const [buttonNumber, setButtonNumber] = useState<number | undefined>(-1)

    const handleClick = () => {
        const clientId = '4a4a31b6c9084d13b5499f9e8e2a2f45'
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = 'https://accounts.spotify.com/authorize'

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_daialog=true`
        
    }

    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        if(!auth.token) navigate('/')
    }, [currentPlaylist, auth.token]);

     return ( 
        <>
            <div className="playlistPage" >
            <Sidebar />
            <div className="playlistBody">
                <div className="headerBlock">
                    <img className="playlistImage" src={currentPlaylist.img || search.currentSearchPlaylist.image} alt="img" />
                    <div className="AllPlaylistInfo">
                        <span className='headerPlaylistTitle'>ПЛЕЙЛИСТ</span>
                        <span className="playlistTitle">{currentPlaylist.title || search.currentSearchPlaylist.name}</span>
                        <span className="playlistDescription">{currentPlaylist.description || search.currentSearchPlaylist.description}</span>
                        <span className="currentPlaylistInfo">Spotify • {currentPlaylist.songs?.length || search.currentSearchPlaylist.songs?.length} треков</span>
                    </div>
                    <div className="mobilePlaylist">
                        <div className="mobileImage">
                            <img src={currentPlaylist.img || search.currentSearchPlaylist.image} alt="" />
                        </div>
                        <div className="mobilePlaylistInfo">
                            <span className="mobilePlaylistTitle">{currentPlaylist.title || search.currentSearchPlaylist.name}</span>
                            <span className="mobilePlaylistDescription">{currentPlaylist.description || search.currentSearchPlaylist.description}</span>
                            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="playlistContent">
                    <div className="songsList">
                        <div className="headerSongsList">
                            <div className="songNameBlock">
                                <span>#</span>
                                <span className="songNameInfo">НАЗВАНИЕ</span>
                            </div>
                            <span className="albumInfo">АЛЬБОМ</span>
                            <span className="lastUpdate">ДАТА ОБНОВЛЕНИЯ</span>
                            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 uPxdw"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path><path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path></svg>
                        </div>
                        <hr style={{opacity: 0.3}}/>
                        <div className="songsContent">
                            {!search.currentSearchPlaylist?.songs?.length && currentPlaylist.songs?.map((el, index) => (
                                <SongCard                                   
                                    setButtonNumber={(num: number) => setButtonNumber(num)}
                                    buttonNumber={buttonNumber}
                                    index={index}
                                    key={el.number} 
                                    number={index + 1}
                                    img={el.img} 
                                    songNumber={0} 
                                    title={el.title} 
                                    albumName={el.albumName} 
                                    author={el.author}
                                    id={el.id}
                                    isFavourite={el.isFavourite}
                                    songUrl={el.songUrl}
                                    songAuthorId={el.songAuthorId}
                            />
                            ))}
                            {search.currentSearchPlaylist?.songs?.map((el, index) => (
                                <SongCard                                   
                                    setButtonNumber={(num: number) => setButtonNumber(num)}
                                    buttonNumber={buttonNumber}
                                    index={index}
                                    key={el.number} 
                                    number={index + 1}
                                    img={el.img} 
                                    songNumber={0} 
                                    title={el.title} 
                                    albumName={el.albumName} 
                                    author={el.author}
                                    id={el.id}
                                    isFavourite={el.isFavourite}
                                    songAuthorId={el.songAuthorId}
                                    songUrl={el.songUrl}
                                />
                            ))}
                            {!currentPlaylist.songs || !search.currentSearchPlaylist?.songs && (
                                <div>
                                    <img src={SpinnerLoader} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
            <MobileFooter />
            {player.currentPlayingSong && (
                <PlayerTrack />
              )}
      </>
     );
}
 
export default PlaylistPage;