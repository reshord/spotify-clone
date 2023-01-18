import { useAppDispatch } from '../../rtk/hooks/RTKHook';
import { toggleFavoriteModal } from '../../rtk/slices/modals';
import '../../styles/Favourites/FavoriteModal.css'

const FavoriteModal = () => {

    const dispatch = useAppDispatch()

    const handleClick = () => {
        const clientId = '4a4a31b6c9084d13b5499f9e8e2a2f45'
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = 'https://accounts.spotify.com/authorize'
        const scope = [
            'user-read-email',
            'user-read-private', 
            'user-read-playback-state',
            'user-read-currently-playing', 
            'user-read-playback-position',
            'user-modify-playback-state',
            'user-top-read',
            'user-read-recently-played',
            'app-remote-control',
            'streaming'
        ]
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`
        
    }

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
                    <button className="closeFavoriteModal" onClick={closeFavoriteModal}>Не сейчас</button>
                    <button onClick={handleClick} className="toAuthFavoriteBtn">Войти</button>
                </div>
            </div>
        </div>
     );
}
 
export default FavoriteModal;