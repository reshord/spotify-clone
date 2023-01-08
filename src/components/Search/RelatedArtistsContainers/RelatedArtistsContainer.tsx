import React from "react";
import { Link } from "react-router-dom";
import { IRelatedArtist } from "../../../types/types";
import SearchedArtistsCard from "../SearchedCards/RelatedArtistsCard";
import '../../../styles/Search/RelatedArtists.css'

interface IProps {
    items: IRelatedArtist[] | null,
    title: string
}

const RelatedArtistsContainer: React.FC<IProps> = ({items, title}) => {

    const shortlyRelatedArtists = items && items.length > 6 ? items.slice(0, 6) : items

    return ( 
        <div className="relatedArtistsContainer">
            <div className="relatedArtistsHeaderBlock">
                {items && items.length > 6 ? (
                    <Link to={''} className='relatedArtistsTitle'>{title}</Link>
                ) : (
                    <span className="relatedArtistsTitle">{title}</span>
                )}
                {items && items.length > 6 && (
                    <Link to={''} className={'showAllRelatedArtists'}>ПОКАЗАТЬ ВСЕ</Link>
                )}
            </div>
            <div style={{overflowY: 'hidden'}}>
                <div className="relatedArtistsList">
                    {shortlyRelatedArtists?.map(el => (
                            <SearchedArtistsCard image={el.image} name={el.name} id={el.authorId}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default RelatedArtistsContainer;