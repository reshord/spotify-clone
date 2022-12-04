import HeaderContent from "./HeaderContent/HeaderContent";
import '../../styles/Content/Content.css'
import MusicContainer from "./MusicCard/MusicContainer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from './../../rtk/hooks';
import { RootState, store } from './../../rtk/store';

const Content = () => {

    const location = useLocation()
    
    const {playlists} = useAppSelector<RootState>(store.getState) 
    
    

    useEffect(() => {
    }, []);

    return ( 
        <main className="content">
            <HeaderContent />
            <div className="contentWrapper">
                    <MusicContainer title='Spotify Playlists' playlist={playlists.SpotifyPlaylists}/>
                    <MusicContainer title="Mood" playlist={playlists.Mood} />
                    <MusicContainer title="Mood" playlist={playlists.Mood} />
                    <MusicContainer title="Mood" playlist={playlists.Mood} />
                    <MusicContainer title="Mood" playlist={playlists.Mood} />
                    <MusicContainer title="Mood" playlist={playlists.Mood} />
            </div>
        </main>
     );
}
 
export default Content;