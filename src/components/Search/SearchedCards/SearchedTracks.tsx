import React from "react";
import { ISearchedTracks } from "../../../types/types";

const SearchedTracks: React.FC<ISearchedTracks> = ({img, name, author}) => {
    return ( 
        <div className="searchedTrackBody">
            <img src={`${img}`} alt="" />
            <div className="searchedTrackInfo">
                <span className="searchedTrackTitle">{name}</span>
                <span className="searchedTrackAbout">Трек • {author}</span>
            </div>
        </div>
     );
}
 
export default SearchedTracks;