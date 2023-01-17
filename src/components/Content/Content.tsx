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

    // const songUrl = 'https://p.scdn.co/mp3-preview/a1586c5c9b24718272ad8d06128cb9d8c519a3fa?cid=4a4a31b6c9084d13b5499f9e8e2a2f45'

    // const play = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // console.log(play.current?.play());
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