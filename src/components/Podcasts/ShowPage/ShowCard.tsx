import React from 'react';
import '../../../styles/ShowPage/ShowCard.css'
import { IShowList } from '../../../types/types';

const ShowCard: React.FC<IShowList> = ({image, title, description}) => {
    return ( 
        <div className="showCard">
            <div className="showCardImage">
                <img src={image} alt="" />
            </div>
            <div className="showCardInfo">
                <span className="showCardTitle">{title}</span>
                <span className="showCardDescription">{description}</span>
            </div>
        </div>
     );
}
 
export default ShowCard;