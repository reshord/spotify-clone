import { useEffect } from 'react';
import './App.css';
import BannerToAuth from './components/BannerToAuth';
import Content from './components/Content/Content';
import MobileModal from './components/MobileModal';
import Sidebar from './components/Sidebar/Sidebar';
import { RootState, store } from './rtk/store';
import { useAppDispatch, useAppSelector } from './rtk/hooks/RTKHook'
import { setToken } from './rtk/slices/Auth'
import MobileFooter from './components/Footer/MobileFooter';
import { getPlaylistsSongs } from './rtk/axios';
import ModalToAuth from './components/ModalToAuth';
import PlayerTrack from './components/PlayerTrack/PlayerTrack';
import SearchModal from './components/Search/SearchModal';
import FavoriteModal from './components/Favourites/FavoriteModal';
import { Modal } from '@mui/material';


function App() {

  const {Modals, auth, player, favourites} = useAppSelector<RootState>(store.getState)

  const dispatch = useAppDispatch()

  useEffect(() => {
      const hash = window.location.hash
      if(hash) {
          const token = hash.substring(1).split('&')[0].split('=')[1]
          dispatch(setToken(token))
          window.localStorage.setItem('token', token)
      }      
    }, [auth.token, player.currentlyPlayingTrack]);

  
  return (
           <>
              <div className="App" >
                <Sidebar />
                <Content />
                {auth.token && (
                  <MobileFooter />
                )}                
              </div>

              {!auth.token && (
                <BannerToAuth />
              )}
              {Modals.modalToAuth.toggle && (
                  <ModalToAuth />
              )}
              {Modals.mobileModal && (
                <MobileModal />
              )}
              {Modals.favoriteModal && (
                  <FavoriteModal />
              )}
         </>
  );
}

export default App;
