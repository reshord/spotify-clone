import { useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import HeaderContent from "../../Content/HeaderContent/HeaderContent";
import Sidebar from "../../Sidebar/Sidebar";
import RelatedArtistsCard from "../SearchedCards/SearchedArtistsCard";
import {BiArrowBack} from 'react-icons/bi'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RelatedArtistsPage = () => {

    const {search} = useAppSelector<RootState>(store.getState)

    const navigate = useNavigate()

    const toBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }, []);

    return ( 
        <div className="relatedArtistsPage">
            <Sidebar />

            <div className="relatedArtistsPageBody">
                <HeaderContent />
                <div className="relatedArtistPageContent">
                    <div className="relatedArtistPageHeaderBlock">
                        <BiArrowBack onClick={toBack}/>
                        <span className="relatedArtistPageTitle">
                            Поклонника так же нравится
                        </span>
                    </div>
                    <div className="relatedArtistsPageList">
                        {search.relatedArtists?.map(el => (
                            <RelatedArtistsCard image={el.image} name={el.name} id={el.authorId}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RelatedArtistsPage;