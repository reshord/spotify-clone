import React, { useState } from "react";
import { BsPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getCurrentArtistTopTracks, getCurrentSearchArtist, getRelatedArtists } from "../../../axios";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/RTKHook";
import { deleteCurrentPlayingSong, setCurrentPlayingSong, setStopSong } from "../../../rtk/slices/TracksPlayer";
import { RootState, store } from "../../../rtk/store";
import { ISearchedTrack } from "../../../types/types";

const SearchedTracksCard: React.FC<ISearchedTrack> = ({index, buttonNumber, setButtonNumber, number, img, name, author, id, songAuthorId, songUrl}) => {

    const {player} = useAppSelector<RootState>(store.getState)
    const dispatch = useAppDispatch()

    const [onSongHover, setOnSongHover] = useState<boolean>()



    const setCurrentSong = async () => {
        await dispatch(deleteCurrentPlayingSong())
        dispatch(setCurrentPlayingSong({index, author, title: name, img, id, songAuthorId, songUrl}))

    }

    const stopPlayingSong = () => {
        dispatch(setStopSong())
    }

    const getArtist = () => {
        dispatch(getCurrentSearchArtist({id: songAuthorId}))
        dispatch(getCurrentArtistTopTracks(songAuthorId))
        dispatch(getRelatedArtists(songAuthorId))
    }

    return ( 
        <div className="searchedTrackBody"
             onMouseMove={buttonNumber !== index ? () => setOnSongHover(true) : () => setOnSongHover(false)} 
             onMouseLeave={() => setOnSongHover(false)}
             onClick={() => setButtonNumber && setButtonNumber(number ? number - 1 : number)}
            >
            <img src={`${img}`} alt="" />
            <div className="playTrackButtonMobile">
                    {onSongHover || buttonNumber === index && (
                        <>
                            {player.isPlaying ? (
                                <BsPauseFill onClick={stopPlayingSong} style={{fontSize: 28, fill: 'white'}}/>
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
            <div className="searchedTrackInfo">
                <span className="searchedTrackTitle">{name}</span>
                <Link to={`/artist/${id}`} onClick={getArtist} className="searchedTrackAbout">Трек • {author}</Link>
            </div>
        </div>
     );
}
 
export default SearchedTracksCard;