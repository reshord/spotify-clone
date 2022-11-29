import CardMusic from './CardMusic'
import '../../../styles/Content/Music/MusicContainer.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import SimpleBar from "simplebar-react";
import { IPlaylist } from '../../../types/types';


interface IProps {
    title: string
    playlist: IPlaylist[]
}

const MusicContainer: React.FC<IProps> = ({title, playlist}) => {


    useEffect(() => {
    }, []);

    return ( 
        <div className="cardContainer">
        <div className="headerContainer">
            <div className="ContainerTitle">
                <Link to={''}>
                    {title}
                </Link>
            </div>
            <span className="allMusics">ПОКАЗАТЬ ВСЕ</span>
        </div>
           <div className="cards">
                {playlist.map(el => (
                    <CardMusic {...el}/>
                ))}
                
           </div>

        </div>
     );
}
 
export default MusicContainer;