import { Card } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../rtk/hooks/RTKHook";
import { RootState, store } from "../../rtk/store";
import '../../styles/Podcasts/Podcasts.css'
import CardMusic from "../Content/MusicContainer/CardMusic";
import PodcastsCard from "./PodcastsCard";

interface IProps {
    title: string
}

const PodcastsContainer: React.FC<IProps> = ({title}) => {

    const {shows} = useAppSelector<RootState>(store.getState)

    return ( 
        <div className="podcastsContainer">
            <span className="podcastsContainerTitle">{title}</span>
            
            <div className="showsContainer">
                {shows.showList?.map((el, index) => ( <PodcastsCard {...el}/> ))}
            </div>
        </div>
     );
}
 
export default PodcastsContainer;