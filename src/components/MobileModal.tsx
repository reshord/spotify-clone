import '../styles/MobileModal.css'
import {MdOutlineClose} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../rtk/hooks/RTKHook';
import {setToggleModal} from '../rtk/slices/modal'
import { RootState, store } from '../rtk/store';
import { deleteToken } from '../rtk/slices/Auth';

const MobileModal = () => {

    const dispatch = useAppDispatch()
    const {auth} = useAppSelector<RootState>(store.getState)

    const closeModal = () => {
        dispatch(setToggleModal(false))
    }

    const exit = () => {
        dispatch(deleteToken())
    }

    return ( 
        <div className="mobileModalBody">
            <div className="mobileModalContent">
                <MdOutlineClose className='closeModal' onClick={() => closeModal()} style={{fill: 'white'}}/>
                <div className="modalMenu">
                    {auth.token ? (
                        <div className='withAuthTokenBlock'>
                            <Link to={'/profile'}>Профиль</Link>
                            <span onClick={() => exit()}>Выйти</span>
                        </div>
                    ) : (
                        <div>
                            <Link to={'/auth'}>Войти</Link>
                            <Link to={'/register'}>Зарегистрироваться</Link>
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