import '../../styles/Auth/Auth.css'
import {AiFillFacebook, AiFillApple} from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import {useEffect} from 'react'

const AuthPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return ( 
        <div className="authBody">
            <div className="logo">
                <Link to={'/'}>
                 <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />
                </Link>
            </div>
            <hr />
            <div className="authContent">
                <div className="authBlock">
                    <span className='toContinueInfo'>Чтобы продолжить, войдите в Spotify.</span>
                    <div className='authFacebook'>
                        <AiFillFacebook style={{fontSize: '20px'}}/>
                        <span>ВОЙТИ ЧЕРЕЗ FACEBOOK</span>
                    </div>
                    <div className='authApple'>
                        <AiFillApple style={{fill: 'white', fontSize: '20px'}}/>
                        <span>ВОЙТИ ЧЕРЕЗ APPLE</span>
                    </div>
                    <div className='authGoogle'>
                        <FcGoogle style={{fontSize: '20px'}}/>
                        <span>ВОЙТИ ЧЕРЕЗ GOOGLE</span>
                    </div>
                    <div className='sectionBlock'>
                        <div>
                            <hr className='hrLine' />
                        </div>
                        <span>ИЛИ</span>
                        <div>
                            <hr className='hrLine' />
                        </div>
                    </div>
                        <div className="inputDataBlock">
                            <span>Эл. почта или имя пользователя</span>
                            <input className='inputAuthData' type="text" placeholder='Эл. почта или имя пользователя'/>
                        </div>
                        <div className="inputDataBlock">
                            <span>Пароль</span>
                            <input className='inputAuthData' type="password" placeholder='Пароль'/>
                        </div>
                        <Link to={''} className='restore'>Забыли пароль?</Link>
                        <div className='restoreOrEntrance'>
                            <div className="rememberMeButton">
                                <input id='rememberMe' type="checkbox" />
                                <label htmlFor="rememberMe">Запомнить меня</label>
                            </div>
                            <button>ВОЙТИ</button>
                        </div>
                        <hr style={{width: '100%'}}/>
                        <span className='withoutAccount'>Нет аккаунта?</span>
                        <button className='registerSpotify'>РЕГИСТРАЦИЯ В SPOTIFY</button>
                </div>
            </div>
        </div>
     );
}
 
export default AuthPage;