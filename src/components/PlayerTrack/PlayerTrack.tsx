import '../../styles/PlayerTrack/PlayerTrack.css'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {ImNext2, ImPrevious2} from 'react-icons/im'
import {  deleteCurrentPlayingSong, setCurrentPlayingSong, setStopSong } from '../../rtk/slices/TracksPlayer';

const PlayerTrack = React.memo(() => {

    const {auth, player} = useAppSelector<RootState>(store.getState)
    const {isPlaying, currentPlayingSong} = player
    const dispatch = useAppDispatch()

    const changeCurrentTrack = async (type: string) => {
        // await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
        //     headers: {
        //         Authorization: `Bearer ${auth.token}`,
        //         'Content-Type': 'application/json'
        //     }
        // })
        // dispatch(getCurrentlyPlayingTrack(auth.token))
    }

    let audioElem = useRef<HTMLAudioElement | null>(null)

    const changeStateSong = async (state: string) => {
        switch(state) {
            case 'play':
                await dispatch(deleteCurrentPlayingSong())
                dispatch(setCurrentPlayingSong(player.currentPlayingSong))
                break
            case 'pause':
                dispatch(setStopSong())
                break
            default: 
                break
        }
    }


    useEffect(() => {
        if(isPlaying) {
            audioElem.current?.play()
        }
        else if(!isPlaying) {
            audioElem.current?.pause()
        }
    }, [isPlaying, currentPlayingSong]);

    return ( 
        <div className="playerTrackWrapper">
            <div className="playerTrackBody">
            <div className="currentTrackBlock">
                {player.currentPlayingSong && (
                    <>
                        <audio ref={audioElem} src={player.currentPlayingSong.songUrl}></audio>
                        <img className='playingTrackImg' src={`${player.currentPlayingSong?.img}`} alt="" />
                        <div className="currentTrackInfo">
                            <Link to={''} className="currentTrackTitle">{player.currentPlayingSong?.title}</Link>
                            <Link to={`/artist/${player.currentPlayingSong.songAuthorId}`} className="currentTrackAuthor">{player.currentPlayingSong?.author}</Link>
                        </div>
                        {/* <div className="blockAddToFavourites">
                            <MdOutlineFavoriteBorder style={{fontSize: 20, fill: 'white'}}/>
                        </div> */}
                    </>
                )}
            </div>
            <div className="playerControls">
                <div className="controlsBtns">
                    <ImPrevious2 className='prevTrackBtn controlBtn' onClick={() => changeCurrentTrack('previous')}/>
                    {isPlaying ? (
                        <BsPauseFill onClick={() => changeStateSong('pause')} className='pauseTrackBtn controlBtn' />
                    ) : (
                        <BsFillPlayFill onClick={() => changeStateSong('play')}  className='startTrackBtn controlBtn'/>
                    )}
                    <ImNext2 className='nextTrackBtn controlBtn' onClick={() => changeCurrentTrack('next')}/>
                </div>
                
                <div className="currentPlayingTrackBar">

                </div>
            </div>
            <div className="mobileControls">
                    {isPlaying ? (
                        <BsPauseFill onClick={() => changeStateSong('pause')} className='pauseTrackBtn controlBtn' />
                    ) : (
                        <BsFillPlayFill onClick={() => changeStateSong('play')}  className='startTrackBtn controlBtn'/>
                    )}
            </div>
        </div>
        </div>
     );
})
 
export default PlayerTrack;