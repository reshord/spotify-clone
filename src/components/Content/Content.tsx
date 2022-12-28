import HeaderContent from "./HeaderContent/HeaderContent";
import '../../styles/Content/Content.css'
import MusicContainer from "./MusicContainer/MusicContainer";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from './../../rtk/store';
import axios from "axios";

const Content = () => {

    const location = useLocation()
    
    const {playlists, auth} = useAppSelector<RootState>(store.getState)

    useEffect(() => {
        
    }, []);

    return ( 
        <main className="content"  >
            <HeaderContent />
            <div className="contentWrapper">
                    <MusicContainer title='Spotify Playlists' playlist={playlists.SpotifyPlaylists} type={'ADD_SPOTIFY_SONGS'}/>
                    <MusicContainer title="Mood" playlist={playlists.Mood} type={'ADD_MOOD_SONGS'}/>
                    <MusicContainer title="Mood" playlist={playlists.Dream} type={'ADD_DREAM_SONGS'}/>
                    <MusicContainer title="Focus" playlist={playlists.Focus} type={'ADD_FOCUS_SONGS'}/>
            </div>
        </main>
     );
}
 
export default Content;