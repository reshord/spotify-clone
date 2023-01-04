import React from "react";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../../../rtk/hooks/RTKHook";
import { deleteItemSearchHistory } from "../../../rtk/slices/Search";
import { ISearchedTracks } from "../../../types/types";

const SearchHistoryCard: React.FC<ISearchedTracks> = ({img, id, songs, description, name}) => {

    const dispatch = useAppDispatch()

    const deleteItemHistory = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation()
        dispatch(deleteItemSearchHistory({image: img, name, description, songs, id}))
    }

    return ( 
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
     );
}
 
export default SearchHistoryCard;