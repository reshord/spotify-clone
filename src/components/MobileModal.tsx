import '../styles/MobileModal.css'
import {MdOutlineClose} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../rtk/hooks/RTKHook';
import {setToggleModal} from '../rtk/slices/modal'
import { RootState, store } from '../rtk/store';

const MobileModal = () => {

    const dispatch = useAppDispatch()
    const {auth} = useAppSelector<RootState>(store.getState)

    const closeModal = () => {
        dispatch(setToggleModal(false))
    }

    const handleClick = () => {
        const clientId = '4a4a31b6c9084d13b5499f9e8e2a2f45'
        const redirectUrl = 'http://localhost:3000/'
        const apiUrl = 'https://accounts.spotify.com/authorize'

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_daialog=true`
    }

    const Exit = () => {
        window.location.href = '/'
    }

    return ( 
        <div className="mobileModalBody">
            <div className="mobileModalContent">
                <MdOutlineClose className='closeModal' onClick={() => closeModal()} style={{fill: 'white'}}/>
                <div className="modalMenu">
                    {auth.token ? (
                        <div className='withAuthTokenBlock'>
                            <Link to={'/profile'}>Профиль</Link>
                            <span onClick={() => Exit()}>Выйти</span>
                        </div>
                    ) : (
                        <div className='withoutAuthTokenBlock'>
                            <span onClick={handleClick}>Войти</span>
                            <span onClick={handleClick}>Зарегистрироваться</span>
                        </div>
                    )}
                    
                        <hr style={{width: 30, height: 2, margin: 0, border: '1px solid white'}}/>
                        <span>Premium</span>
                        <span>Справка</span>
                        <span>Скачать</span>
                        <span>Конфиденциально</span>
                        <span>Условия</span>
                </div>
            </div>
        </div>
     );
}
 
export default MobileModal;