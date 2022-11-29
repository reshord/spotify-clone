import React from 'react';
import '../../../styles/Content/Music/CardMusic.css'
import { IPlaylist } from '../../../types/types';

const CardMusic: React.FC<IPlaylist> = ({img, title, description}) => {
    return ( 
        <div className="cardMusic">
            <div>
                <img className='cardImg' src={img} alt="" />
            </div>
            <div className='cardInfo'>
                <span className='title'>{title}</span>
                <div className='description'>
                    {description}
                </div>
                
            </div>
        </div>
     );
}
 
export default CardMusic;