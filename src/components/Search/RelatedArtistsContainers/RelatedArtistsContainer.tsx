import React from "react";
import { Link } from "react-router-dom";
import { IRelatedArtist } from "../../../types/types";
import SearchedArtistsCard from "../SearchedCards/SearchedArtistsCard";
import '../../../styles/Search/RelatedArtists.css'
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import { setItemToSearchHistory } from "../../../rtk/slices/Search";

interface IProps {
    items: IRelatedArtist[] | null,
    title: string
}

const RelatedArtistsContainer: React.FC<IProps> = ({items, title}) => {

    const shortlyRelatedArtists = items && items.length > 6 ? items.slice(0, 6) : items
    const {search} = useAppSelector<RootState>(store.getState)

    const dispatch = useAppDispatch()



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
            <div style={{overflowY: 'hidden', width: '100%'}}>
                <div className="relatedArtistsList">
                    {shortlyRelatedArtists?.map(el => (
                            <SearchedArtistsCard type="" image={el.image} name={el.name} id={el.authorId}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default RelatedArtistsContainer;