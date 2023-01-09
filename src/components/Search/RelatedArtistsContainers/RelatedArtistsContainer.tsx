import React from "react";
import { Link } from "react-router-dom";
import { IRelatedArtist } from "../../../types/types";
import SearchedArtistsCard from "../SearchedCards/RelatedArtistsCard";
import '../../../styles/Search/RelatedArtists.css'
import { useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";

interface IProps {
    items: IRelatedArtist[] | null,
    title: string
}

const RelatedArtistsContainer: React.FC<IProps> = ({items, title}) => {

    const shortlyRelatedArtists = items && items.length > 6 ? items.slice(0, 6) : items
    const {search} = useAppSelector<RootState>(store.getState)

    return ( 
        <div className="relatedArtistsContainer">
            <div className="relatedArtistsHeaderBlock">
                {items && items.length > 6 ? (
                    <Link to={`/artist/${search.currentSearchedArtist?.id}/related`} className='relatedArtistsTitle'>{title}</Link>
                ) : (
                    <span className="relatedArtistsTitle">{title}</span>
                )}
                {items && items.length > 6 && (
                    <Link to={`/artist/${search.currentSearchedArtist?.id}/related`} className={'showAllRelatedArtists'}>ПОКАЗАТЬ ВСЕ</Link>
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