import HeaderContent from "../Content/HeaderContent/HeaderContent";
import Sidebar from "../Sidebar/Sidebar";
import PodcastsContainer from "./PodcastsContainer";
import '../../styles/Podcasts/Podcasts.css'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/RTKHook";
import { getShows } from "../../rtk/axios";
import { RootState, store } from "../../rtk/store";

const PodcastsPage = () => {

    const dispatch = useAppDispatch()
    const {auth, shows} = useAppSelector<RootState>(store.getState)

    useEffect(() => {
    }, []);

    return ( 
        <div className="podcastsPageBody">
            <Sidebar />
            <div className="podcastsPageContent">
                <HeaderContent />
                <div className="podcastsContainerBody">
                    <PodcastsContainer title='Топ подкастов' />
                </div>
            </div>
        </div>
     );
}
 
export default PodcastsPage;