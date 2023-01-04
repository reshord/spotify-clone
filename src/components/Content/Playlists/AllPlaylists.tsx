import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import Sidebar from "../../Sidebar/Sidebar";
import HeaderContent from "../HeaderContent/HeaderContent";
import '../../../styles/Playlists/AllPlaylists.css'
import BannerToAuth from "../../BannerToAuth";
import {useState, useEffect} from 'react'
import { IPlaylist } from "../../../types/types";
import CardMusic from "../MusicContainer/CardMusic";
import MobileFooter from "../../Footer/MobileFooter";
import axios from "axios";

const Playlists = () => {

    const {playlists, auth, search} = useAppSelector<RootState>(store.getState) 
    const {currentSection} = playlists

    const getPlaylist = async () => {
        const data = await axios.get('https://api.spotify.com/v1/me/tracks', {
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-Type': 'application/json'
            }
        })
        console.log(data)
    }
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        getPlaylist()
        console.log(search.currentSearchPlaylist.songs);
        
    }, []);

    return ( 
        <>        
        <div className="playlistsPage" style={{color: 'white'}}>
            <Sidebar /> 
            <div className="playlistsPageBody">
                <HeaderContent />
                <div className="AllPlalistsContent">
                    <div className="playlistPageTitle">{currentSection.title}</div>
                    <div className="allPlaylists">
                        {currentSection.list?.map(el => (
                            <CardMusic type={''}
                                img={el.img} 
                                name={el.title} 
                                description={el.description} 
                                songs={el.songs} 
                                id={el.id}
                             />
                        ))}

                </div>
                </div>
                
            </div>

        </div>
        <BannerToAuth />
    </>
     );
}
 
export default Playlists;