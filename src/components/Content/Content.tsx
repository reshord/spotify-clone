import HeaderContent from "./HeaderContent/HeaderContent";
import '../../styles/Content/Content.css'
import MusicContainer from "./MusicContainer/MusicContainer";
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from './../../rtk/store';

const Content = () => {
    
    const {playlists} = useAppSelector<RootState>(store.getState)

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