import '../../../styles/Content/HeaderContent.css'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { setToggleModal } from '../../../rtk/slices/modal';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks/RTKHook';
import { RootState, store } from '../../../rtk/store';
import {AiOutlineSetting} from 'react-icons/ai'

const HeaderContent = () => {

    const location = useLocation()
    const [currSelect, setCurrSelect] = useState<string>('Премиум')
    const {auth} = useAppSelector<RootState>(store.getState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrSelect(event.target.value as string)
    }
    
    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(setToggleModal(true))
    }

    return ( 
        <header className="header">
            <div className='navigation' style={{maxWidth: `${location.pathname === '/search' ? '380px' : ''}`,}}>
                <MdKeyboardArrowLeft className='navArrow' />
                <MdKeyboardArrowRight className='navArrow' />
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
                <span className='line'>.</span>
                <div className='auth'>
                    <span>Зарегистрироваться</span>
                    <button onClick={() => window.location.pathname = '/auth'} className='authBtn'>Войти</button>
                </div>
                <button className='toAppBtn'>В ПРИЛОЖЕНИЕ</button>
                
                {auth.token 
                ? (
                    <AiOutlineSetting className='settingsBtn' onClick={() => openModal()} style={{fill: 'white', fontSize: 27}}/>
                  )
                : (
                    <div className="buttonMenu" onClick={() => openModal()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>
        </header>
     );
}
 
export default HeaderContent;