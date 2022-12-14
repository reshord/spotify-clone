import HeaderContent from "./HeaderContent/HeaderContent";
import '../../styles/Content/Content.css'
import MusicContainer from "./MusicCard/MusicContainer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from './../../rtk/store';
import axios from "axios";

const Content = () => {

    const location = useLocation()
    
    const {playlists, auth} = useAppSelector<RootState>(store.getState) 
    
    

    useEffect(() => {
        // console.log(playlists.SpotifyPlaylists);
        
    }, []);

    return ( 
        <main className="content">
            <HeaderContent />
            <div className="contentWrapper">
                    <MusicContainer title='Spotify Playlists' playlist={playlists.SpotifyPlaylists} type={'ADD_SPOTIFY_SONGS'}/>
                    <MusicContainer title="Mood" playlist={playlists.Mood} type={'ADD_MOOD_SONGS'}/>
                    <MusicContainer title="Mood" playlist={playlists.Mood} type={''}/>
                    <MusicContainer title="Mood" playlist={playlists.Mood} type={''}/>
                    <MusicContainer title="Mood" playlist={playlists.Mood} type={''}/>
                    <MusicContainer title="Mood" playlist={playlists.Mood} type={''}/>
            </div>
        </main>
     );
}
 
export default Content;