import '../../styles/PlayerTrack/PlayerTrack.css'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import axios from 'axios';
import { useEffect } from 'react';
import { getCurrentlyPlayingTrack } from '../../rtk/axios';
import { Link } from 'react-router-dom';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {VscDebugStart} from 'react-icons/vsc'
import {ImNext2, ImPrevious2} from 'react-icons/im'

const PlayerTrack = () => {

    const {auth, player} = useAppSelector<RootState>(store.getState)
    const {currentlyPlayingTrack, playerState} = player
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

    useEffect(() => {
       dispatch(getCurrentlyPlayingTrack(auth.token))
    }, [currentlyPlayingTrack]);

    return ( 
        <div className="playerTrackBody">
            <div className="currentTrackBlock">
                {currentlyPlayingTrack && (
                    <>
                        <img src={`${currentlyPlayingTrack?.img}`} alt="" />
                        <div className="currentTrackInfo">
                            <Link to={''} className="currentTrackTitle">{currentlyPlayingTrack?.title}</Link>
                            <Link to={''} className="currentTrackAuthor">{currentlyPlayingTrack?.author}</Link>
                        </div>
                        <div className="blockAddToFavourites">
                            <MdOutlineFavoriteBorder style={{fontSize: 20, fill: 'white'}}/>
                        </div>
                    </>
                )}
            </div>
            <div className="playerControls">
                <div className="controlsBtns">
                    <ImPrevious2 className='prevTrackBtn controlBtn' onClick={() => changeCurrentTrack('previous')}/>
                    {playerState ? (
                        <BsPauseFill className='pauseTrackBtn controlBtn' />
                    ) : (
                        <BsFillPlayFill className='startTrackBtn controlBtn'/>
                    )}
                    <ImNext2 className='nextTrackBtn controlBtn' onClick={() => changeCurrentTrack('next')}/>
                </div>
                <div className="currentPlayingTrackBar">

                </div>
            </div>
        </div>
     );
}
 
export default PlayerTrack;