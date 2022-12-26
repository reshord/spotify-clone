import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import '../../styles/Favourites/Favourites.css'
import HeaderContent from '../Content/HeaderContent/HeaderContent';
import Sidebar from '../Sidebar/Sidebar';
import ArtistsSection from './ArtistsSection';
import PlaylsitsSection from './PlaylistsSection';
import PodcastsSection from './PodcastsSection';
import ProfileHeader from './ProfileHeader';

const FavouritesPage = () => {
    const [profileModal, setProfileModal] = useState<boolean>(false)

    const {auth} = useAppSelector<RootState>(store.getState)
    const [currSection, setCurrSection] = useState<number>(0)

    const navigation = useNavigate()

    React.useEffect(() => {
        if(!auth.token) navigation('/')
    }, [auth.profile]);

    return ( 
        <div className="favouritesPage">
            <Sidebar />
            <div className="favouritesBody">
                    <ProfileHeader 
                            currSection={currSection} 
                            setCurrSection={(index: number) => setCurrSection(index)} 
                            setProfileModal={(profileModal: boolean) => setProfileModal(profileModal)}
                            profileModal={profileModal}
                            />
                    {profileModal && (
                        <div className='profileModalFavorite'>
                            <ul>
                                <li>
                                    <Link to={`/profile/${auth.profile?.id}`}>Профиль</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Настройки</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Premium</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Скачать</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Справка</Link>
                                </li>
                                <li  className='exitBtn'>
                                    <span onClick={() => window.location.href = '/'}>Выйти</span>
                                </li>
                            </ul>
                        </div>
                        )}
                    <div className="favouritesContent">
                        {currSection === 0 && ( <PlaylsitsSection /> )}
                        {currSection === 2 && ( <ArtistsSection /> )}
                        {currSection === 1 && ( <PodcastsSection /> )}

                        <hr style={{marginTop: 70, width: '95%'}}/>
                    </div>
            </div>

        </div>
     );
}
 
export default FavouritesPage;