import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../rtk/hooks/RTKHook';
import { setModalToAuth } from '../rtk/slices/modals';
import { RootState, store } from '../rtk/store';
import '../styles/ModalToAuth.css'

const ModalToAuth = () => {

    const {Modals} = useAppSelector<RootState>(store.getState)
    const dispatch = useAppDispatch()

    const closeAuthModal = () => {
        dispatch(setModalToAuth({toggle: false, img: ''}))
    }

    const handleClick = () => {
        const clientId = '4a4a31b6c9084d13b5499f9e8e2a2f45'
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = 'https://accounts.spotify.com/authorize'

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_daialog=true`
    }

    return ( 
        <div className="modalToAuth">
            <div className="modalAuthBody">
                <div className="modalAuthContent">
                    <div className='modalImage'>
                        <img src={Modals.modalToAuth.img} alt="" />
                    </div>
                    <div className="modalBlockInfo">
                        <span className='modalBlockInfoTitle'>Слушай что угодно в бесплатной версии Spotify</span>
                        <button className='modalBlockSingUpBtn' onClick={handleClick}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                        <button className='donwloadApp'>СКАЧАТЬ ПРИЛОЖЕНИЕ</button>
                        <div className="blockSignIn">
                            <span>Уже есть аккаунт?</span>
                            <span onClick={handleClick} className='signInBtn'>Войти</span>
                        </div>
                    </div>
                </div>
                <span onClick={() => closeAuthModal()} className='closeAuthModal'>Закрыть</span>
            </div>
        </div>
     );
}
 
export default ModalToAuth;