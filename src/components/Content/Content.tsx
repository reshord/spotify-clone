import HeaderContent from "./HeaderContent/HeaderContent";
import '../../styles/Content/Content.css'
import MusicContainer from "./MusicContainer/MusicContainer";
import { Link, useLocation, useMatch, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from './../../rtk/store';
import axios from "axios";
import MobileFooter from "../Footer/MobileFooter";

const Content = () => {
    
    const {playlists, auth} = useAppSelector<RootState>(store.getState)

    useEffect(() => {
    }, []);

    return ( 
        <main className="content"  >
            <HeaderContent />
            <div className="contentWrapper">
                    <MusicContainer name='Spotify Playlists' playlist={playlists.SpotifyPlaylists} type={'ADD_SPOTIFY_SONGS'}/>
                    <MusicContainer name="Mood" playlist={playlists.Mood} type={'ADD_MOOD_SONGS'}/>
                    <MusicContainer name="Focus" playlist={playlists.Focus} type={'ADD_FOCUS_SONGS'}/>
            </div>
            
        </main>
     );
}
 
export default Content;