import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../rtk/hooks';
import { setCurrentPlaylist } from '../../../rtk/slices/SpotifyPlaylists';
import '../../../styles/Content/Music/CardMusic.css'
import { IPlaylist, ISongInfo } from '../../../types/types';

const CardMusic: React.FC<IPlaylist> = ({img, title, description, songs}) => {

    const dispatch = useAppDispatch()

    const addCurrentPlaylist = (currentPlaylist: ISongInfo[] | undefined) => {
        dispatch(setCurrentPlaylist({songs: currentPlaylist, title, description}))
    }

    return ( 
        <>
            <Link to={`/playlist/${title}`}>
                <div className="cardMusic" onClick={() => addCurrentPlaylist(songs)}>
                    <div>
                        <img className='cardImg' src={img} alt="" />
                    </div>
                    <div className='cardInfo'>
                        <span className='title'>{title}</span>
                        <div className='description'>
                            {description}
                        </div>
                        
                    </div>
                </div>
            </Link>
        </>
     );
}
 
export default CardMusic;