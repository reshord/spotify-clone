import HeaderContent from "../Content/HeaderContent/HeaderContent";
import Sidebar from "../Sidebar/Sidebar";
import '../../styles/Search/SearchPage.css'
import BannerToAuth from "../BannerToAuth";
import { useAppSelector } from '../../rtk/hooks';
import { RootState, store } from '../../rtk/store';
import GenreCard from "./GenreCard";

const SearchPage = () => {

    const {genres} = useAppSelector<RootState>(store.getState)

    return ( 
        <>
            <div className="SearchPageBody">
                <Sidebar />
                <main className="SearchPageContent">
                    <HeaderContent />
                    <div className="SearchBlockContent">
                        <span>Все остальное</span>
                        <div className="genresList">
                            {genres.genresList.map(el => (
                                <GenreCard {...el}/>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <BannerToAuth />
        </>
     );
}
 
export default SearchPage;