import React from "react";
import { Link } from "react-router-dom";
import { getCurrentSearchPlaylistsSongs } from "../../../rtk/axios";
import { useAppDispatch } from "../../../rtk/hooks/RTKHook";
import { ISearchedPlaylists } from "../../../types/types";

const SearchedPlaylistsCard: React.FC<ISearchedPlaylists> = ({image, name, id, description}) => {

    const dispatch = useAppDispatch()

    const getSearchedPlaylistsTracks = () => {
        dispatch(getCurrentSearchPlaylistsSongs({id, name, img: image, description}))
    }

    return ( 
        <Link to={`/playlist/${id}`} >
            <div className="searchedPlaylistBody" onClick={() => getSearchedPlaylistsTracks()}>
                <img src={`${image}`} alt="" />
                <div className="searchedPlaylistInfo">
                    <span className="searchedPlaylistTitle">{name}</span>
                    <span className="searchedPlaylistAbout">Плейлист</span>
                </div>
            </div>
        </Link>
     );
}
 
export default SearchedPlaylistsCard;