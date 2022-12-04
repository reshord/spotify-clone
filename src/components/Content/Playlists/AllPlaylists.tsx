import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../rtk/hooks";
import { RootState, store } from "../../../rtk/store";
import Sidebar from "../../Sidebar/Sidebar";
import HeaderContent from "../HeaderContent/HeaderContent";
import '../../../styles/Playlists/AllPlaylists.css'
import BannerToAuth from "../../BannerToAuth";
import {useState, useEffect} from 'react'
import { IPlaylist } from "../../../types/types";
import { IAllPlaylists} from "../../../types/types";
import CardMusic from "../MusicCard/CardMusic";

const Playlists = () => {

    const {playlists} = useAppSelector<RootState>(store.getState) 
    const {currentSection} = playlists
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
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
                            <CardMusic {...el}/>
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