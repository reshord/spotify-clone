import HeaderContent from "../../Content/HeaderContent/HeaderContent";
import Sidebar from "../../Sidebar/Sidebar";
import '../../../styles/ShowPage/ShowPage.css'
import { useAppSelector } from "../../../rtk/hooks/RTKHook";
import { RootState, store } from "../../../rtk/store";
import ShowCard from "./ShowCard";
import React, { useState } from 'react'
import { IShowList } from "../../../types/types";
import { useNavigate } from "react-router-dom";

const ShowPage = () => {

    const {shows, auth} = useAppSelector<RootState>(store.getState)
    const {currentShow} = shows
    const [randomEpisode, setRandomEpisode] = useState<IShowList>()
    

    const navigate = useNavigate()

    React.useEffect(() => {
        if(!auth.token) navigate('/')
        let randomHeaderEpisode: IShowList = currentShow.items && currentShow.items.length > 20 
                                                ? currentShow.items?.[Math.floor(Math.random() * 10)] 
                                                : currentShow.items?.[Math.floor(Math.random() * 2)]
        setRandomEpisode(randomHeaderEpisode)
    }, [currentShow, auth.token]);

    return ( 
        <div className="showPage">
            <Sidebar />
            <div className="showPageContent">
                <HeaderContent />
                <div className="showPageHeader">
                    <img className="showPageHeadeImg" src={currentShow?.image} alt="" />
                    <div className="showPageInfo">
                        <span style={{fontWeight: 700, fontSize: 12}}>ПОДКАСТ</span>
                        <span className="showPageTitle">{currentShow?.title}</span>
                        <span className="showPageAuthor">{currentShow?.author}</span>
                    </div>
                </div>
                <div className="allShowEpisodeContent">
                    <div className="allShowEpisode">
                        <div className="followShowBlock">
                            <button>ПОДПИСАТЬСЯ</button>
                        </div>
                        <div className="randomHeaderEpisode">
                            {randomEpisode && (
                                <div className="randomEpisodeCard">
                                    <span className="andomEpisodeCardContinue">Далее</span>
                                    <span className="randomEpisodeCardTitle">{randomEpisode.title}</span>
                                    <span className="randomEpisodeCardDescription">{randomEpisode.description}</span>
                                </div>
                            )}
                        </div>
                        <div className="allShowEpisodeList">
                            <span className="allShowEpisodeListTitle">Все выпуски</span>
                            <div className="showList">
                                {currentShow.items?.map((el, index) => (
                                    <ShowCard {...el} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="allShowEpisodeInfoAuthor">
                        <span className="aboutAuthorTitle">Об исполнителе</span>
                        <span className="aboutAuthorDescription">{currentShow.description}</span>
                    </div>
                </div>
                
                <hr style={{margin: "20px 0px", }}/>

            </div>
        </div>
     );
}
 
export default ShowPage;