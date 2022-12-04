import '../../../styles/Content/HeaderContent.css'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { useLocation } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'

const HeaderContent = () => {

    const location = useLocation()

    return ( 
        <header className="header">
            <div className='navigation' style={{width: `${location.pathname === '/search' ? '440px' : ''}`}}>
                <MdKeyboardArrowLeft />
                <MdKeyboardArrowRight />
                {location.pathname === '/search' && (
                    <div className='searchBlock'>
                        <input className='searchMusic' 
                               type="text" 
                               placeholder='Что хочешь послушать?'
                            />
                        <BiSearch 
                            style={{fill: 'black', 
                            background: 'white', 
                            position: 'absolute', 
                            fontSize: 27, 
                            borderRadius: 30, 
                            marginLeft: 10}}
                        />
                    </div>
                )}
            </div>
            <div className="blockInfoAuth">
                <div className="info">
                    <span>Premium</span>
                    <span>Справка</span>
                    <span>Скачать</span>
                </div>
                <span className='line'>.</span>
                <div className='auth'>
                    <span>Зарегистрироваться</span>
                        <button onClick={() => window.location.pathname = '/auth'} className='authBtn'>Войти</button>
                </div>
            </div>
        </header>
     );
}
 
export default HeaderContent;