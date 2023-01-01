import React from "react";
import { ISearchedArtists } from "../../../types/types";

const SearchedArtistsCard: React.FC<ISearchedArtists> = ({image, name}) => {
    return ( 
        <div className="searchedArtistsBody">
            <img src={image?.url} alt="" />
            <div className="searchedArtistsInfo">
                <span className="searchedArtistsTitle">{name}</span>
                <span className="searchedArtistsAbout">Артист</span>
            </div>
        </div>
     );
}
 
export default SearchedArtistsCard;