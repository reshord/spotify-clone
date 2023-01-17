import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getCurrentSearchPlaylistsSongs } from "../../../rtk/axios";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/RTKHook";
import { deleteItemSearchHistory, setItemToSearchHistory } from "../../../rtk/slices/Search";
import { deleteCurrentPlaylist, setCurrentPlaylist } from "../../../rtk/slices/SpotifyPlaylists";
import { RootState, store } from "../../../rtk/store";
import { ISearchedPlaylists } from "../../../types/types";

const SearchedPlaylistsCard: React.FC<ISearchedPlaylists> = ({image, name, id, description, songsList}) => {

    const dispatch = useAppDispatch()
    const {search} = useAppSelector<RootState>(store.getState)

    const location = useLocation()

    const getSearchedPlaylistsTracks = () => {
        dispatch(getCurrentSearchPlaylistsSongs({
            id, name, img: image, description,
            songAuthorId: undefined
        })).then(() => {
            dispatch(setCurrentPlaylist({songs: search.currentSearchPlaylist.songs, title: name, img: image, description}))
            dispatch(setItemToSearchHistory({id, name, img: image, description}))
        })

    }

    return ( 
        <Link to={`/playlist/${id}`} onClick={() => getSearchedPlaylistsTracks()}>
            <div className="searchedPlaylistBody" >
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