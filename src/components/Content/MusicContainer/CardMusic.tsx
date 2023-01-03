import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentSearchPlaylistsSongs, getPlaylistsSongs } from '../../../rtk/axios';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks/RTKHook';
import { setModalToAuth } from '../../../rtk/slices/modals';
import { deleteItemSearchHistory, setItemToSearchHistory } from '../../../rtk/slices/Search';
import { setCurrentPlaylist } from '../../../rtk/slices/SpotifyPlaylists';
import { RootState, store } from '../../../rtk/store';
import '../../../styles/Content/Music/CardMusic.css'
import { IPlaylist, ISongInfo } from '../../../types/types';
import {IoMdClose} from 'react-icons/io'

interface IProps {
    img: string | undefined
    name: string | undefined
    description: string | undefined
    songs: ISongInfo[] | undefined
    id: string | undefined
    type: string
}

const CardMusic: React.FC<IProps> = ({img, name, description, songs, id, type,}) => {

    const dispatch = useAppDispatch()
    const [activePlayBtn, setActivePlayBtn] = useState<boolean>(false)
    const {playlists, auth, search} = useAppSelector<RootState>(store.getState)

    const location = useLocation()

    const addCurrentPlaylist = (currentPlaylist: ISongInfo[] | undefined, type: string) => {
        dispatch(setCurrentPlaylist({songs: currentPlaylist, name, description, img}))
        dispatch(getPlaylistsSongs({id, type}))

        if(type === 'searchedPlaylist') {
            dispatch(getCurrentSearchPlaylistsSongs({id, name, img, description})).then(() => {
                dispatch(setCurrentPlaylist({songs: search.currentSearchPlaylist.songs, name, description, img}))
            })
            dispatch(setItemToSearchHistory({img, name, description, songs, id, type}))
        }
        if(type === 'searchHistoryItem') {
   dispatch(setCurrentPlaylist({songs: search.currentSearchPlaylist.songs, name, description, img}))
        }
    }

    const deleteItemHistory = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation()
        dispatch(deleteItemSearchHistory({img, name, description, songs, id, type}))
    }

    const activeToAuthModal = (img: string | undefined) => {
        dispatch(setModalToAuth({toggle: true, img}))
    }

    useEffect(() => {
        console.log(img);
        
    }, [img]);

    return ( 
        <>
            {auth.token 
            ? (
                <Link to={`/playlist/${id}`} className='linkToPlaylist'>
                <div onMouseEnter={() => setActivePlayBtn(true)} 
                     onMouseLeave={() => setActivePlayBtn(false)} 
                     className="cardMusic" 
                     onClick={() => addCurrentPlaylist(songs, type)}
                     >
                    {type === 'searchHistoryItem' && (
                        <div className='deleteSearchHistoryItem' onClick={(e) => deleteItemHistory(e)}>
                            <IoMdClose  />
                        </div>
                    )}
                    
                    <div className='blockCardImg'>
                        <img className='cardImg' src={img} alt="" />
                        {activePlayBtn && (
                            <div className='playMusicBtn'>
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 uPxdw"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                            </div>
                        )}
                    </div>
                    <div className='cardInfo'>
                        <span className='title'>{name}</span>
                        <div className='description'>
                            {description}
                        </div>
                        
                    </div>
                </div>
                    <div className='cardMusicMobile' onClick={() => addCurrentPlaylist(songs, type)}> 
                        <img className='cardImgMobile' src={img} alt="" />
                        <span className='cardTitleMobile'>{name}</span> 
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
                            <span className='title'>{name}</span>
                            <div className='description'>
                                {description}
                            </div>
                            
                        </div>
                    </div>
                       {auth.token 
                       ? (
                         <div className='cardMusicMobile' onClick={() => addCurrentPlaylist(songs, type)}> 
                            <img className='cardImgMobile' src={img} alt="" />
                            <span className='cardTitleMobile'>{name}</span> 
                        </div>
                       ) 
                       : (
                            <div className='cardMusicMobile' onClick={() => activeToAuthModal(img)}> 
                                <img className='cardImgMobile' src={img} alt="" />
                                <span className='cardTitleMobile'>{name}</span> 
                            </div>
                       )}
                </div>
            )}
        </>
     );
}
 
export default CardMusic;