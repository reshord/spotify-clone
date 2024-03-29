import React, { useState } from "react";
import { BsPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getCurrentArtistTopTracks, getCurrentSearchArtist, getRelatedArtists } from "../../../axios";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/RTKHook";
import { deleteCurrentPlayingSong, setCurrentPlayingSong, setStopSong } from "../../../rtk/slices/TracksPlayer";
import { RootState, store } from "../../../rtk/store";

interface IProps {
    img: string | undefined 
    name: string | undefined
    songAuthorId: string | undefined
    author: string | undefined
    setButtonNumber?: (num: number) => void
    buttonNumber?: number
    index: number
    number: number
    songUrl: string
}

const SearchedSongCard: React.FC<IProps> = ({number, songUrl, img, name, songAuthorId, author, buttonNumber, setButtonNumber, index}) => {

    const dispatch = useAppDispatch()
    const {player} = useAppSelector<RootState>(store.getState)
    const [onSongHover, setOnSongHover] = useState<boolean>()


    const id = songAuthorId

    const stopPlayingSong = () => {
        dispatch(setStopSong())
    }

    const setCurrentSong = async () => {
        await dispatch(deleteCurrentPlayingSong())
        dispatch(setCurrentPlayingSong({number, buttonNumber, index, author, title: name, img, id, songAuthorId, songUrl}))

    }

    const getArtist = () => {
        dispatch(getCurrentSearchArtist({id}))
        dispatch(getCurrentArtistTopTracks(id))
        dispatch(getRelatedArtists(id))
    }

    return ( 
        <div className={buttonNumber === index ? 'onFocusSearchedSongCard' : 'searchedSongCard'} 
        onMouseMove={buttonNumber !== index ? () => setOnSongHover(true) : () => setOnSongHover(false)} 
        onMouseLeave={() => setOnSongHover(false)}
        onClick={() => setButtonNumber && setButtonNumber(number ? number - 1 : number)}
        >
            <div className="searchedSongCardInfo">
                <img className="searchedSongImage" src={img} alt="" />
                <div className="playTrackButton">
                    {onSongHover || buttonNumber === index && (
                        <>
                            {player.isPlaying ? (
                                <BsPauseFill onClick={stopPlayingSong} style={{fontSize: 24, fill: 'white'}}/>
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
                </div>
                <div className="searchedSongInfo">
                    <div className="searchedSongTitle">{name}</div>
                    <Link onClick={getArtist} to={`/artist/${songAuthorId}`} className="searchedSongAuthor">{author}</Link>
                </div>
            </div>
        </div>
     );
}
 
export default SearchedSongCard;