import React from "react";
import { Link } from "react-router-dom";
import { getShows } from "../../rtk/axios";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/RTKHook";
import { setModalToAuth } from "../../rtk/slices/modals";
import { setCurrentShow } from "../../rtk/slices/Show";
import { RootState, store } from "../../rtk/store";
import { IShowList } from "../../types/types";

const PodcastsCard: React.FC<IShowList> = 
    ({id, description, title, author, image, items}) => {

    const dispatch = useAppDispatch()
    const {auth} = useAppSelector<RootState>(store.getState)

    const addCurrentPodcast = () => {
        dispatch(getShows({id, token: auth.token}))
        dispatch(setCurrentShow({
            id,
            description,
            title,
            author,
            image,
            items
        }))
        dispatch(setModalToAuth(true))
    }

    return ( 
        <Link to={`/show/6jCMUw8PM5C1fLpytTCzkH`} className='linkToShow'>
            <div className="podcastCard" 
                 onClick={() => addCurrentPodcast()}
                >
                <div className='podcastCardImg'>
                    <img src={image} alt="" />
                </div>
                <div className='podcastCardInfo'>
                    <span className='title'>{title}</span>
                    <div className='author'>
                        {author}
                    </div>
                    
                </div>
            </div>
            <div className='podcastCardMobile' onClick={() => addCurrentPodcast()}> 
                <img className='podcastCardImgMobile' src={'img'} alt="" />
                <span className='podcastCardTitleMobile'>{'title'}</span> 
            </div>
        </Link>
     );
}
 
export default PodcastsCard;