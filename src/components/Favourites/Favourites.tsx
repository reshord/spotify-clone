import { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import '../../styles/Favourites/Favourites.css'
import HeaderContent from '../Content/HeaderContent/HeaderContent';
import Sidebar from '../Sidebar/Sidebar';

const FavouritesPage = () => {

    const {auth} = useAppSelector<RootState>(store.getState)
    const [currSection, setCurrSection] = useState<number>(0)
    const sections = ['Плейлисты', 'Подкасты', 'Исполнители', 'Альбомы']


    return ( 
        <div className="favouritesPage">
            <Sidebar />
            <div className="favouritesBody">
                <div className="favouriteHeaderContent">
                    <Link to={'/'}>
                        <MdKeyboardArrowLeft 
                            className='arrowBack' 
                            style={{fill: 'white', fontSize: 35}}
                        />
                    </Link>
                    <div className='allSections'>
                            {sections.map((el, index) => (
                                <div 
                                    className={`${currSection === (index) ? 'currentSection' : 'section'}`}
                                    onClick={() => setCurrSection(index)}
                                >
                                {el}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="favouritesContent">
                        {currSection === 0 && (
                            <div className="blockPlaylists">
                                <span className='blockPlaylitsTitle'>Плейлисты</span>

                                <div className="blockPlaylistsCards">
                                    <div className="favouritesTracks">
                                        <div className="favouritesTracksBlock">
                                            <div className="favouritesTracksInfo">
                                                <span className="favouritesTrackAuthor">Ice Cube</span>
                                                <span className="favouritesTrackTitle">It Was A Good Day</span>
                                            </div>
                                        </div>
                                        <span className='favouritesTitle'>Любимые треки</span>
                                        <span className='countOfFavouritesTracks'>1 любимые треки</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <hr style={{marginTop: 70}}/>

                    </div>
            </div>
        </div>
     );
}
 
export default FavouritesPage;