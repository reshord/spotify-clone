import React from "react";
import { Link } from "react-router-dom";
import { ISearchedAlbums } from "../../../types/types";

const SearchedAlbumCard: React.FC<ISearchedAlbums> = ({image, name, author, id}) => {
    return ( 
        <Link to={`/album/${id}`}>
            <div className="searchedAlbumBody">
                <img src={`${image}`} alt="" />
                <div className="searchedAlbumInfo">
                    <span className="searchedAlbumTitle">{name}</span>
                    <span className="searchedAlbumAbout">Альбом • {author}</span>
                </div>
            </div>
        </Link>
     );
}
 
export default SearchedAlbumCard;