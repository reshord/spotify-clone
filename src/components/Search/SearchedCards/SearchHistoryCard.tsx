import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { getCurrentSearchPlaylistsSongs } from "../../../rtk/axios";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/RTKHook";
import { deleteItemSearchHistory } from "../../../rtk/slices/Search";
import { setCurrentPlaylist } from "../../../rtk/slices/SpotifyPlaylists";
import { RootState, store } from "../../../rtk/store";
import { ISearchedTracks } from "../../../types/types";

const SearchHistoryCard: React.FC<ISearchedTracks> = ({img, id, songs, description, name}) => {

    const dispatch = useAppDispatch()
    const {search} = useAppSelector<RootState>(store.getState)

    const deleteItemHistory = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation()
        dispatch(deleteItemSearchHistory({image: img, name, description, songs, id}))
    }

    const getPlaylist = () => {
        dispatch(getCurrentSearchPlaylistsSongs({
            id, name, img, description,
            songAuthorId: undefined
        })).then(() => {
            dispatch(setCurrentPlaylist({songs: search.currentSearchPlaylist.songs, name, description, img}))
        })
    }

    return ( 
        <Link to={`/playlist/${id}`} onClick={getPlaylist}>
            <div className="searchHistoryItem">
                <div className="searchHistoryItemInfoBlock">
                    <img className="searchHistoryItemImage" src={img} alt="" />
                    <div className="searchHistoryItemInfo">
                        <span className="searchHistoryItemTitle">{name}</span>
                        <span className="searchHistoryItemMarker">Плейлист</span>
                    </div>
                </div>
                <IoMdClose onClick={e => deleteItemHistory(e)} className="deleteSearchItemMobile"/>
            </div>
        </Link>
     );
}
 
export default SearchHistoryCard;