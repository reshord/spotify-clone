import { useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import Sidebar from "../../Sidebar/Sidebar";
import HeaderContent from "../HeaderContent/HeaderContent";
import '../../../styles/Playlists/PlaylistPage.css'
import BannerToAuth from "../../BannerToAuth";
import SongCard from "./SongCard";
import {useEffect, useRef, useState} from 'react'
import MobileFooter from "../../Footer/MobileFooter";

const PlaylistPage = () => {

    const {playlists} = useAppSelector<RootState>(store.getState) 
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



    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        console.log(currentPlaylist);
        
    }, []);

     return ( 
        <>
            <div className="playlistPage" >
            <Sidebar />
            <div className="playlistBody">
                <HeaderContent />
                <div className="headerBlock">
                    <div className="AllPlaylistInfo">
                        <span className='headerPlaylistTitle'>ПЛЕЙЛИСТ</span>
                        <span className="playlistTitle">{currentPlaylist.title}</span>
                        <span className="playlistDescription">{currentPlaylist.description}</span>
                    </div>
                    <div className="mobilePlaylist">
                        <div className="mobileImage">
                            <img src={currentPlaylist.img} alt="" />
                        </div>
                        <div className="mobilePlaylistInfo">
                            <span className="mobilePlaylistTitle">{currentPlaylist.title}</span>
                            <span className="mobilePlaylistDescription">{currentPlaylist.description}</span>
                            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="playlistContent">
                    <div className="playlistContentHeader">
                        <div className="playlistPlay"></div>
                        <div className="AddToFavorites"></div>
                        <div className="moreBtn"></div>
                    </div>
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
                            {currentPlaylist.songs?.map((el, index) => (
                                <SongCard                                    // setButtonNumber={(num: number) => setButtonNumber(num)}
                                    buttonNumber={buttonNumber}
                                    index={index}
                                    key={el.number} number={index + 1}
                                    img={el.img} songNumber={0} title={el.title} albumName={el.albumName} author={el.author}
                             />
                            ))}
                            {!currentPlaylist.songs && (
                                <div className="checkInfo">Обрабатываем информацию...</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        <BannerToAuth />
        <MobileFooter />
        </>
     );
}
 
export default PlaylistPage;