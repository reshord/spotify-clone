import { useAppDispatch, useAppSelector } from "../../rtk/hooks/RTKHook";
import { RootState, store } from "../../rtk/store";
import HeaderContent from "../Content/HeaderContent/HeaderContent";
import CardMusic from "../Content/MusicContainer/CardMusic";
import Sidebar from "../Sidebar/Sidebar";
import '../../styles/Search/RecentSearches.css'
import { clearHistory } from "../../rtk/slices/Search";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecentSearches = () => {

    const {search} = useAppSelector<RootState>(store.getState)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const clearSearchHistory = () => {
        dispatch(clearHistory())
    }

    useEffect(() => {
        if(!search.searchHistory.length) navigate('/')
        
    }, [search.searchHistory]);

    return ( 
        <div className="recentSearchesPage">
            <Sidebar />
            <div className="recentSearchesBody">
                <HeaderContent />
                <div className="recentSearchesContent">
                    <div className="recentSearchesBlock">
                        <span className="searchHistoryTitle">История поиска</span>
                        <span className="clearRecentSearches" onClick={clearSearchHistory}>ОЧИСТИТЬ ИСТОРИЮ ПОИСКА</span>
                    </div>
                    <div className="recentSearchesList">
                        {search.searchHistory.map(el => (
                            <CardMusic img={el.img} description={undefined} songs={search.currentSearchPlaylist.songs} type={"searchHistoryItem"} name={el.name} id={el.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RecentSearches;