import '../../../styles/Content/HeaderContent.css'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { setToggleModal } from '../../../rtk/slices/modals';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks/RTKHook';
import { RootState, store } from '../../../rtk/store';
import {AiOutlineSetting} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { getProfile } from '../../../rtk/axios';
import {GrClose} from 'react-icons/gr'

const HeaderContent = () => {


    const location = useLocation()
    
    const [currSelect, setCurrSelect] = useState<string>('Премиум')


    const [profileModal, setProfileModal] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    
    const {auth} = useAppSelector<RootState>(store.getState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrSelect(event.target.value as string)
    }

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

    const Exit = () => {
        window.location.href = '/'
    }
    
    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(setToggleModal(true))
    }

    useEffect(() => {
        if(auth.token) dispatch(getProfile(auth.token))

    }, [auth.token]);

    return ( 
        <header className="header">
            <div className='navigation' style={{maxWidth: `${location.pathname === '/search' ? '380px' : ''}`,}}>
                <Link to={'/'}>
                    <MdKeyboardArrowLeft className='navArrow' />
                </Link>
                <AiOutlineArrowLeft 
                            className='arrowToBack'
                            style={{backgroundColor: 'var(--background-color)', }}
                        />
                <Link to={'/'}>
                    <img className='headerLogoImg' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
                </Link>
                <Link to={'/search'}>
                    <BiSearch style={{backgroundColor: 'var(--background-color)', display: `${location.pathname === '/search' && 'none'}`}} className='headerSearch'/>
                </Link>
                {location.pathname === '/search' && (
                    <div className='searchBlock'>
                        <BiSearch 
                            style={{fill: 'black', 
                            background: 'white', 
                            position: 'absolute', 
                            fontSize: 27, 
                            borderRadius: 30, 
                            marginLeft: 10}}
                        />
                        <input className='searchMusic' 
                               type="text" 
                               placeholder='Что хочешь послушать?'
                               value={value}
                               onChange={e => setValue(e.target.value)}
                            />
                        {value && (
                            <GrClose 
                            style={{fill: 'black', 
                            background: 'white', 
                            position: 'absolute', 
                            right: 10,
                            borderRadius: 30, 
                            fontSize: 25,
                            }}
                            onClick={() => setValue('')}
                        />
                        )}
                    </div>
                )}
            </div>
            {auth.token && (
                <div className='blockInfoAuthWithToken'  style={{width: `${auth.token && location.pathname !== '/search' ? '280px' : '140px'}`}}>
                    <span style={{display: `${location.pathname === '/search' && 'none'}`}} className='changeRate'>Сменить тариф</span>
                    
                    <div className="authProfile" onClick={() => setProfileModal(!profileModal)} style={{background: `${profileModal ? 'grey' : ''}`}}>
                        {auth.profile?.images?.length && auth.profile.images[0] ? (
                            <img className='profileImage' src={auth.profile.images[0].url} alt="" />
                        ) 
                        : (
                            <div className='blockWithoutProfileImage'>
                                <svg style={{fill: 'white'}} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"></path></svg>
                            </div>
                        )}
                        <span className='profileName' style={{color: 'white'}}>{auth.profile?.display_name}</span>
                        {profileModal ? (
                            <svg style={{fill: 'white'}} role="img" height="16" width="16" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16" data-encore-id="icon"><path d="M14 10L8 4l-6 6h12z"></path></svg>
                        ) : (
                            <svg style={{fill: 'white'}} role="img" height="16" width="16" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16" data-encore-id="icon"><path d="M14 6l-6 6-6-6h12z"></path></svg>
                        )}
                    </div>
                    
                    {profileModal && (
                        <div className='profileModal'>
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
                                    <span onClick={() => window.location.href = '/'}>Выйти</span>
                                </li>
                            </ul>
                        </div>
                        )}
                    
                </div>
            )}
            
            <div className="blockInfoAuth" style={{display: `${auth.token && 'none'}`}}>
                {!auth.token && (
                    <div>
                        <div className="info" >
                            <span>Premium</span>
                            <span>Справка</span>
                            <span>Скачать</span>
                        </div>
                        <div className="infoForMobile">
                            <Box>
                                <TextField 
                                    value={currSelect}
                                    style={{width: 150, borderRadius: 6, background: 'white'}} 
                                    label={''} 
                                    select
                                    onChange={handleChange}
                                >
                                    <MenuItem className='selectValue' value='Премиум'>
                                        <Link to={'/auth'}>Премиум</Link>
                                    </MenuItem>
                                    <MenuItem className='selectValue' value='Скачать'>
                                        <Link to={'/auth'}>Скачать</Link>
                                    </MenuItem>
                                    <MenuItem className='selectValue' value='Справка'>
                                        <Link to={'/auth'}>Справка</Link>
                                    </MenuItem>
                                </TextField>
                            </Box>
                        </div>
                    </div>
                )}
                {!auth.token && (
                    <span className='line'></span>
                )}
                {!auth.token && (
                    <div className='auth'>
                        <span>Зарегистрироваться</span>
                        <button onClick={handleClick} className='authBtn'>Войти</button>
                    </div>
                )}
                <button className='toAppBtn'>В ПРИЛОЖЕНИЕ</button>
                
                
            </div>
            {auth.token 
                ? (
                    <AiOutlineSetting className='settingsBtn' onClick={() => openModal()} style={{fill: 'white', fontSize: 27, marginRight: 15}}/>
                  )
                : (
                    <GiHamburgerMenu className='headerMenuBtn' onClick={() => openModal()}/>
                )}
        </header>
     );
}
 
export default HeaderContent;