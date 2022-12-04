import '../../../styles/Playlists/SongCard.css'
import { ISongInfo } from '../../../types/types';
import {useState} from 'react'


const SongCard: React.FC<ISongInfo> = ({number, img, title, author, setButtonNumber, albumName, dateUpdate, songTime, buttonNumber, index}) => {
    
    const [buttonPlay, setButtonPlay] = useState<boolean>()
    const [buttonState, setButtonState] = useState<boolean>(false)
    
    const changeStateSongCard = (cardNumber: number) => {
    }

    return ( 
        <div
             className={buttonNumber === index ? 'onFocusCard' : 'songCardBody'} 
             onMouseMove={buttonNumber !== index ? () => setButtonPlay(true) : () => setButtonPlay(false)} 
             onMouseLeave={() => setButtonPlay(false)}
             onClick={() => setButtonNumber && setButtonNumber(number - 1)}
             >

            <div className="songCardInfo" >
                {buttonPlay ||  buttonNumber === index && (
                    <span className='startPlaySong'>
                        <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </span>
                )}
                {buttonPlay && (
                    <span className='startPlaySong'>
                        <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </span>
                )}
                {!buttonPlay && buttonNumber !== index && (
                    <span className="songNumber">{number}</span>
                )}
                
                <div className='songInfo'>
                    <img className="songImg" src={img}></img>
                    <div className="aboutSong">
                        <div className="songTitle">{title}</div>    
                        <div className="songAuthor">{author}</div>    
                    </div>                    
                </div>
                
            </div>
                <span className='songAlbumName'>{albumName}</span>
                <span className='songDateUpdate'>{dateUpdate}</span>
                <span className='songTime'>{songTime}</span>
        </div>
     );
}
 
export default SongCard;