import React from "react";
import { useAppSelector } from "../../rtk/hooks/RTKHook";
import { RootState, store } from "../../rtk/store";
import '../../styles/Podcasts/Podcasts.css'
import PodcastsCard from "./PodcastsCard";

interface IProps {
    title: string
}

const PodcastsContainer: React.FC<IProps> = ({title}) => {

    const {shows} = useAppSelector<RootState>(store.getState)

    return ( 
        <div className="podcastsContainer">
            <span className="podcastsContainerTitle">{title}</span>
            
            <div style={{overflowY: 'hidden'}}>
                <div className="showsContainer">
                    {shows.showList?.map((el, index) => ( <PodcastsCard {...el}/> ))}
                </div>
            </div>
        </div>
     );
}
 
export default PodcastsContainer;