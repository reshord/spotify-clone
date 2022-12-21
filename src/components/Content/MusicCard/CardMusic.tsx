import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlaylistsSongs } from '../../../rtk/axios';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks/RTKHook';
import { setModalToAuth } from '../../../rtk/slices/modals';
import { setCurrentPlaylist } from '../../../rtk/slices/SpotifyPlaylists';
import { RootState, store } from '../../../rtk/store';
import '../../../styles/Content/Music/CardMusic.css'
import { IPlaylist, ISongInfo } from '../../../types/types';

interface IProps {
    img: string
    title: string
    description: string
    songs: ISongInfo[] | undefined
    id: string
    type: string
}

const CardMusic: React.FC<IProps> = ({img, title, description, songs, id, type}) => {

    const dispatch = useAppDispatch()
    const [activePlayBtn, setActivePlayBtn] = useState<boolean>(false)
    const {playlists, auth} = useAppSelector<RootState>(store.getState)

    const addCurrentPlaylist = (currentPlaylist: ISongInfo[] | undefined, type: string) => {
        dispatch(setCurrentPlaylist({songs: currentPlaylist, title, description, img}))
        dispatch(getPlaylistsSongs({id, type}))
    }

    const activeToAuthModal = (img: string) => {
        dispatch(setModalToAuth({toggle: true, img}))
    }

    useEffect(() => {
    }, []);

    return ( 
        <>
            {auth.token 
            ? (
                <Link to={`/playlist/${title}`} className='linkToPlaylist'>
                <div onMouseEnter={() => setActivePlayBtn(true)} 
                     onMouseLeave={() => setActivePlayBtn(false)} 
                     className="cardMusic" 
                     onClick={() => addCurrentPlaylist(songs, type)}
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
                    <div className='cardMusicMobile' onClick={() => addCurrentPlaylist(songs, type)}> 
                        <img className='cardImgMobile' src={img} alt="" />
                        <span className='cardTitleMobile'>{title}</span> 
                    </div>
            </Link>
            ) 
            : (
                <div className='linkToPlaylist'>
                    <div onMouseEnter={() => setActivePlayBtn(true)} 
                        onMouseLeave={() => setActivePlayBtn(false)} 
                        className="cardMusic" 
                        onClick={() => activeToAuthModal(img)}
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
                       {auth.token 
                       ? (
                         <div className='cardMusicMobile' onClick={() => addCurrentPlaylist(songs, type)}> 
                            <img className='cardImgMobile' src={img} alt="" />
                            <span className='cardTitleMobile'>{title}</span> 
                        </div>
                       ) 
                       : (
                            <div className='cardMusicMobile' onClick={() => activeToAuthModal(img)}> 
                                <img className='cardImgMobile' src={img} alt="" />
                                <span className='cardTitleMobile'>{title}</span> 
                            </div>
                       )}
                </div>
            )}
        </>
     );
}
 
export default CardMusic;