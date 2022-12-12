import '../styles/MobileModal.css'
import {MdOutlineClose} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../rtk/hooks';
import {setToggleModal} from '../rtk/slices/modal'

const MobileModal = () => {

    const dispatch = useAppDispatch()

    const closeModal = () => {
        dispatch(setToggleModal(false))
    }

    return ( 
        <div className="mobileModalBody">
            <div className="mobileModalContent">
                <MdOutlineClose className='closeModal' onClick={() => closeModal()} style={{fill: 'white'}}/>
                <div className="modalMenu">
                    <Link to={'/auth'}>Войти</Link>
                    <Link to={'/register'}>Зарегистрироваться</Link>
                    <hr style={{width: 20, height: 2, margin: 0, border: '1px solid white'}}/>
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