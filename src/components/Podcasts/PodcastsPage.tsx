import HeaderContent from "../Content/HeaderContent/HeaderContent";
import Sidebar from "../Sidebar/Sidebar";
import PodcastsContainer from "./PodcastsContainer";
import '../../styles/Podcasts/Podcasts.css'

const PodcastsPage = () => {

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