import React from "react";
import { ISearchedTracks } from "../../../types/types";

const SearchedTracks: React.FC<ISearchedTracks> = ({image, name, author}) => {
    return ( 
        <div className="searchedTrackBody">
            <img src={`${image.url}`} alt="" />
            <div className="searchedTrackInfo">
                <span className="searchedTrackTitle">{name}</span>
                <span className="searchedTrackAbout">Трек • {author}</span>
            </div>
        </div>
     );
}
 
export default SearchedTracks;