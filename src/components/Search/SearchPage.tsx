import HeaderContent from "../Content/HeaderContent/HeaderContent";
import Sidebar from "../Sidebar/Sidebar";
import '../../styles/Search/SearchPage.css'
import BannerToAuth from "../BannerToAuth";
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import GenreCard from "./GenreCard";
import { BiSearch } from "react-icons/bi";
import MobileFooter from "../Footer/MobileFooter";
import {GrClose} from 'react-icons/gr'
import { useState } from "react";

const SearchPage = () => {

    const {genres, auth} = useAppSelector<RootState>(store.getState)
    const [value, setValue] = useState<string>('')

    return ( 
        <>
            <div className="SearchPageBody">
                <Sidebar />
                <main className="SearchPageContent">
                    <HeaderContent />
                    <div className="headerSearchBlock">
                        <BiSearch
                            style={{fill: 'black', 
                            background: 'white', 
                            fontSize: 27, 
                            borderRadius: 30, 
                            marginLeft: 10,
                            position: 'absolute'
                        }}
                        />
                        <input className='SearchMusicInput' 
                               type="text" 
                               placeholder='Что хочешь послушать?'
                               value={value}
                               onChange={e => setValue(e.target.value)}
                            />
                        {value && (
                            <GrClose 
                            style={{fill: 'black', 
                            background: 'white', 
                            position: 'absolute', 
                            right: 10,
                            borderRadius: 30, 
                            fontSize: 20,
                            }}
                            onClick={() => setValue('')}
                        />
                        )}
                    </div>
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
            {!auth.token && (
                <BannerToAuth />
              )}
            <MobileFooter />
        </>
     );
}
 
export default SearchPage;