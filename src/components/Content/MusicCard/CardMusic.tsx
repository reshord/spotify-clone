import { join } from 'path';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../rtk/hooks';
import { setCurrentPlaylist } from '../../../rtk/slices/SpotifyPlaylists';
import '../../../styles/Content/Music/CardMusic.css'
import { IPlaylist, ISongInfo } from '../../../types/types';

const CardMusic: React.FC<IPlaylist> = ({img, title, description, songs}) => {

    const dispatch = useAppDispatch()
    const [activePlayBtn, setActivePlayBtn] = useState<boolean>(false)

    const addCurrentPlaylist = (currentPlaylist: ISongInfo[] | undefined) => {
        dispatch(setCurrentPlaylist({songs: currentPlaylist, title, description, img}))
    }

    return ( 
        <>
            <Link to={`/playlist/${title}`} className='linkToPlaylist'>
                <div onMouseEnter={() => setActivePlayBtn(true)} 
                     onMouseLeave={() => setActivePlayBtn(false)} 
                     className="cardMusic" 
                     onClick={() => addCurrentPlaylist(songs)}
                     >
                    <div className='blockCardImg'>
                        <img className='cardImg' src={img} alt="" />
                        {activePlayBtn && (
                            <div className='playMusicBtn'>
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 uPxdw"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                            </div>
                        )}
                    </div>
                    <div className='cardInfo'>
                        <span className='title'>{title}</span>
                        <div className='description'>
                            {description}
                        </div>
                        
                    </div>
                </div>
                    <div className='cardMusicMobile' onClick={() => addCurrentPlaylist(songs)}> 
                        <img className='cardImgMobile' src={img} alt="" />
                        <span className='cardTitleMobile'>{title}</span> 
                    </div>
            </Link>
        </>
     );
}
 
export default CardMusic;