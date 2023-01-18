import '../../../styles/Playlists/SongCard.css'
import { ISongInfo } from '../../../types/types';
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks/RTKHook';
import { RootState, store } from '../../../rtk/store';
import React, {useEffect} from 'react'
import {MdOutlineFavoriteBorder, MdFavorite} from 'react-icons/md'
import {BsPauseFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { getCurrentArtistTopTracks, getCurrentSearchArtist, getRelatedArtists } from '../../../rtk/axios';
import { deleteCurrentPlayingSong, setCurrentPlayingSong, setStopSong } from '../../../rtk/slices/TracksPlayer';

const SongCard: React.FC<ISongInfo> = ({isFavourite, number, setButtonNumber, buttonNumber, index, author, title, albumName, img, id, songAuthorId, songUrl}) => {
    
    const [onSongHover, setOnSongHover] = useState<boolean>()
    // const [currentFavorite, setCurrentFavorite] = useState<boolean>(false)

    const {player} =  useAppSelector<RootState>(store.getState)    
    const dispatch = useAppDispatch()

    // let currentFavorite = playlists.favoritesList.length && playlists.favoritesList.filter(el => el.id === id)

    const addToFavourites = () => {
        // setFavourite(true)
        // dispatch(addSongToFavourites({
        //     id, title, author,
        //     number: 0,
        //     img: '',
        //     songNumber: 0,
        //     albumName: '',
        //     isFavourite: false,
        //     songAuthorId: '',
        //     songUrl: ''
        // }))
    }
    

    const getArtist = () => {
        dispatch(getCurrentSearchArtist({id: songAuthorId}))
        dispatch(getCurrentArtistTopTracks(songAuthorId))
        dispatch(getRelatedArtists(songAuthorId))
    }

    const deleteFavourite = () => {
        // setFavourite(false)
        // dispatch(deleteSongFavourites({id, title, author, isFavourite}))
    }

    const stopPlayingSong = () => {
        dispatch(setStopSong())
    }

    const setCurrentSong = async () => {
        await dispatch(deleteCurrentPlayingSong())
        dispatch(setCurrentPlayingSong({isFavourite, number, buttonNumber, index, author, title, albumName, img, id, songAuthorId, songUrl}))

    }

    useEffect(() => {

    },[]);

    return ( 
        <div
             className={buttonNumber === index ? 'onFocusCard' : 'songCardBody'} 
             onMouseMove={buttonNumber !== index ? () => setOnSongHover(true) : () => setOnSongHover(false)} 
             onMouseLeave={() => setOnSongHover(false)}
             onClick={() => setButtonNumber && setButtonNumber(number ? number - 1 : number)}
             >

            <div className="songCardInfo" >
                {onSongHover || buttonNumber === index && (
                    <>
                        {player.isPlaying ? (
                            <BsPauseFill onClick={stopPlayingSong} style={{fontSize: 25, marginRight: 15}}/>
                        ) : (
                            <span className='startPlaySong' onClick={setCurrentSong}>
                                <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                            </span>
                        )}
                    </>

                )}
                {onSongHover && (
                    <span className='startPlaySong' onClick={setCurrentSong}>
                        <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </span>
                )}
                {buttonNumber !== index && !onSongHover && (
                    <span className="songNumber">{number}</span>
                )}

                
                <div className='songInfo'>
                    <img className="songImg" src={img}></img>
                    <div className="aboutSong">
                        <div className="songTitle">{title}</div>    
                        <Link onClick={getArtist} to={`/artist/${id}`} className="songAuthor">{author}</Link>    
                    </div>                    
                </div>
                
            </div>
                <span className='songAlbumName'>{albumName}</span>
                <span className='songDateUpdate'>Soon</span>
                <div className='songTimeBlock'>
                    {isFavourite ? (
                        <MdFavorite style={{fontSize: 20, marginRight: 20, fill: 'lightgreen'}} onClick={() => deleteFavourite()}/>
                    ) 
                    : (
                        <MdOutlineFavoriteBorder style={{fontSize: 20, marginRight: 20, fill: 'white'}} onClick={() => addToFavourites()}/>
                    )}
                    <span className='trackTime'>2:20</span>
                    <div className='moreMenu'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='moreMenuMobile'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </div>
     );
}
 
export default SongCard;