import CardMusic from './CardMusic'
import '../../../styles/Content/Music/MusicContainer.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import SimpleBar from "simplebar-react";
import { IPlaylist } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks';
import { RootState, store } from '../../../rtk/store';
import { setCurrentSection } from '../../../rtk/slices/SpotifyPlaylists';


interface IProps {
    title: string
    token?: string
    playlist: IPlaylist[]
}

const MusicContainer: React.FC<IProps> = ({title, playlist, token}) => {

    const {playlists} = useAppSelector<RootState>(store.getState) 
    const [currentTitle, setCurrentTitle] = useState<string>()
    const dispatch = useAppDispatch()
    
    const shortlyPlaylist = playlist.length > 6 ? playlist.slice(0,6) : playlist
    
    const deleteSpaces = () => {
        const newTitle = title.split(' ')
        setCurrentTitle(`${newTitle[0]}${newTitle[1]}`)
    }

    const setSection = (curPlaylist: IPlaylist[]) => {
        dispatch(setCurrentSection({list: curPlaylist, title}))
    } 

    useEffect(() => {
        deleteSpaces()
    }, []);

    return ( 
        <div className="cardContainer">
        <div className="headerContainer">
            <div className="ContainerTitle">
                <Link onClick={() => setSection(playlist)} to={`/section/${currentTitle}`}>
                    {title}
                </Link>
            </div>
            {playlist.length > 6 && <Link onClick={() => setSection(playlist)} to={`/section/${currentTitle}`} className="allMusics">ПОКАЗАТЬ ВСЕ</Link>}
        </div>
        <div style={{overflowY: 'hidden'}}>
            <div className="cards" >
                {shortlyPlaylist.map(el => (
                    <CardMusic key={el.id} {...el}/>
                ))}
                
           </div>
        </div>
           
        </div>
     );
}
 
export default MusicContainer;