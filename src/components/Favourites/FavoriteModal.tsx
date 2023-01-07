import { useAppDispatch } from '../../rtk/hooks/RTKHook';
import { toggleFavoriteModal } from '../../rtk/slices/modals';
import '../../styles/Favourites/FavoriteModal.css'

const FavoriteModal = () => {

    const dispatch = useAppDispatch()

    const closeFavoriteModal = () => {
        dispatch(toggleFavoriteModal(false))
    }

    return ( 
        <div className='favoriteModalBody'>
            <div className="favoriteModalContent">
                <span className='favoriteModalTitle'>Твоя медиатека</span>
                <span>
                    <p>Чтобы видеть исполнителей, треки, подкасты и плейлисты, которые добавлены в твою медиатеку, войди в аккаунт.</p>
                </span>
                <div className="authorizationBlock">
                    <span className="closeFavoriteModal" onClick={closeFavoriteModal}>Не сейчас</span>
                    <span className="toAuthFavoriteBtn">Войти</span>
                </div>
            </div>
        </div>
     );
}
 
export default FavoriteModal;