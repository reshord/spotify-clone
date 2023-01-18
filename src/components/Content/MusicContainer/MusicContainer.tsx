import CardMusic from './CardMusic'
import '../../../styles/Content/Music/MusicContainer.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { IPlaylist } from '../../../types/types';
import { useAppDispatch } from '../../../rtk/hooks/RTKHook';
import { setCurrentSection } from '../../../rtk/slices/SpotifyPlaylists';


interface IProps {
    name: string
    token?: string
    playlist: IPlaylist[]
    type: string
}

const MusicContainer: React.FC<IProps> = ({name, playlist, token, type}) => {

    const [currentTitle, setCurrentTitle] = useState<string>()
    const dispatch = useAppDispatch()
    
    const shortlyPlaylist = playlist.length > 6 ? playlist.slice(0,6) : playlist
    
    const deleteSpaces = () => {
        const newTitle = name.split(' ')
        setCurrentTitle(`${newTitle[0]}${newTitle[1]}`)
    }

    const setSection = (curPlaylist: IPlaylist[]) => {
        dispatch(setCurrentSection({list: curPlaylist, name}))
    } 

    useEffect(() => {
        deleteSpaces()
        
    }, []);

    return ( 
        <div className="cardContainer">
        <div className="headerContainer">
            <div className="ContainerTitle">
                {playlist.length > 6 ? (
                    <Link 
                        onClick={() => setSection(playlist)} 
                        to={`/section/${currentTitle}`}>
                            {name}
                    </Link>
                ) : (
                    <span>{name}</span>
                )}
                
            </div>
            {playlist.length > 6 && <Link 
                                        onClick={() => setSection(playlist)} 
                                        to={`/section/${currentTitle}`} 
                                        className="allMusics">
                                            ПОКАЗАТЬ ВСЕ
                                    </Link>}
        </div>
        <div style={{overflowY: 'hidden'}}>
            <div className="cards" >
                {shortlyPlaylist.map(el => (
                    <CardMusic 
                        key={el.id} 
                        img={el.img} 
                        name={el.title} 
                        description={el.description} 
                        songs={el.songs} 
                        id={el.id} 
                        type={type} 
                    />
                ))}
                
           </div>
        </div>
           
        </div>
     );
}
 
export default MusicContainer;