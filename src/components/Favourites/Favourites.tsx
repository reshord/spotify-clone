import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import '../../styles/Favourites/Favourites.css'
import MobileFooter from '../Footer/MobileFooter';
import Sidebar from '../Sidebar/Sidebar';
import ArtistsSection from './ArtistsSection';
import PlaylsitsSection from './PlaylistsSection';
import PodcastsSection from './PodcastsSection';
import ProfileHeader from './ProfileHeader';

const FavouritesPage = () => {
    const [profileModal, setProfileModal] = useState<boolean>(false)

    const {auth} = useAppSelector<RootState>(store.getState)
    const [currSection, setCurrSection] = useState<number>(0)
    const [mobileSection, setMobileSection] = useState<number>(0)

    const navigate = useNavigate()

    const exit = () => {
        window.location.href = '/'
    }

    React.useEffect(() => {
        if(!auth.token) navigate('/')
    }, [auth.profile, mobileSection]);

    return ( 
        <div>
            <div className="favouritesPage">
            <Sidebar />
            <div className="favouritesBody">
                    <ProfileHeader 
                            currSection={currSection} 
                            setCurrSection={(index: number) => setCurrSection(index)} 
                            setProfileModal={(profileModal: boolean) => setProfileModal(profileModal)}
                            setMobileSection={(index: number) => setMobileSection(index)}
                            profileModal={profileModal}
                            mobileSection={mobileSection}
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
                                    <span onClick={exit}>Выйти</span>
                                </li>
                            </ul>
                        </div>
                        )}
                    <div className="favouritesContent">
                        {currSection === 0 && ( <PlaylsitsSection /> )}
                        {currSection === 1 && ( <PodcastsSection /> )}
                        {currSection === 2 && ( <ArtistsSection /> )}

                        <hr style={{marginTop: 70, width: '95%'}}/>
                    </div>
                    <div className="favouritesContentMobile">
                        {mobileSection === 0 && ( <PlaylsitsSection /> )}
                        {mobileSection === 1 && ( <PodcastsSection /> )}
                        {mobileSection === 2 && ( <ArtistsSection /> )}
                    </div>
                </div>
            </div>

            <MobileFooter />
        </div>
        
        
     );
}
 
export default FavouritesPage;