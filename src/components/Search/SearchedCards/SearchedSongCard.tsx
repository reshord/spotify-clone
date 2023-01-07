import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentArtistTopTracks, getCurrentSearchArtist, getRelatedArtists } from "../../../rtk/axios";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";

interface IProps {
    img: string | undefined 
    name: string | undefined
    songAuthorId: string | undefined
    author: string | undefined
}

const SearchedSongCard: React.FC<IProps> = ({img, name, songAuthorId, author}) => {

    const dispatch = useAppDispatch()
    const {genres, auth, search, Modals} = useAppSelector<RootState>(store.getState)


    const id = songAuthorId

    const getArtist = () => {
        dispatch(getCurrentSearchArtist({id}))
        dispatch(getCurrentArtistTopTracks(id))
        dispatch(getRelatedArtists(id))

    }

    return ( 
        <div className="searchedSongCard" onClick={getArtist}>
            <div className="searchedSongCardInfo">
                <img className="searchedSongImage" src={img} alt="" />
                <div className="searchedSongInfo">
                    <div className="searchedSongTitle">{name}</div>
                    <Link to={`/artist/${songAuthorId}`} className="searchedSongAuthor">{author}</Link>
                </div>
            </div>
        </div>
     );
}
 
export default SearchedSongCard;