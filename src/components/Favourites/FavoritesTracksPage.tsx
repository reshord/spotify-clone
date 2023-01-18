import { Link } from 'react-router-dom';
import { useAppSelector } from '../../rtk/hooks/RTKHook';
import { RootState, store } from '../../rtk/store';
import '../../styles/Favourites/FavoritesTracksPage.css'
import HeaderContent from '../Content/HeaderContent/HeaderContent';
import Sidebar from '../Sidebar/Sidebar';

const FavoritesTracksPage = () => {

    const {auth} = useAppSelector<RootState>(store.getState)

    return ( 
        <div className="favoritesTracksPage">
            <Sidebar />
            <div className="favoritesTracksBody">
                <HeaderContent />
                <div className="favoritesTracksContent">
                    <div className="favoritesTracksHeaderContent">
                        <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="sdfsdfsdf" className="favoritesTracksImage" />
                        <div className="favoritesTracksHeaderContentInfo">
                            <span className="favoriteTracksHeaderTitle">ПЛЕЙЛИСТ</span>
                            <span className="favoritesTrackPageTitle">Любимые треки</span>
                            <div className="favoritesTrackPageUserInfoBlock">
                                <img src={`${auth.profile?.images && auth.profile.images[0].url}`} alt="" className="favoritesTrackPageUserImage" />
                                <span className="favoritesTrackPageUserName">{auth.profile?.display_name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blockWithoutFavoritesTracks">
                        <span className="blockWithoutFavoritesTracksImage">
                            <svg role="img" height="54" width="54" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15 4v12.167a3.5 3.5 0 11-3.5-3.5H13V4h2zm-2 10.667h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"></path></svg>
                        </span>
                        <span className='yourFavoritesTracks'>Здесь появятся треки, которые тебе понравились</span>
                        <span className='addTracksToMediateka'>Добавляй треки в медиатеку, нажимая на значок сердечка.</span>
                        <Link to={'/search'} className="searchTracksBtn">НАЙТИ ТРЕКИ</Link>
                </div>
            </div>
        </div>
     );
}
 
export default FavoritesTracksPage;