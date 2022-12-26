import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BannerToAuth from './components/BannerToAuth';
import PageNotFound from './components/PageNotFound';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import Playlists from './components/Content/Playlists/AllPlaylists';
import PlaylistPage from './components/Content/Playlists/PlaylistPage';
import AuthPage from './components/Auth/AuthPage';
import SearchPage from './components/Search/SearchPage';
import LoginPage from './components/Auth/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import FavouritesPage from './components/Favourites/Favourites';
import PodcastsPage from './components/Podcasts/PodcastsPage';
import ShowPage from './components/Podcasts/ShowPage/ShowPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Provider store={store}>
        <BrowserRouter>    
          <Routes>
              <Route path='/' element={<App />}/>
              <Route path='/section/:title' element={<Playlists />}/>
              <Route path='/playlist/:playlist' element={<PlaylistPage />}/>
              <Route path='/auth' element={<AuthPage />}/>
              <Route path='/search' element={<SearchPage />}/>
              <Route path='/profile/:id' element={<ProfilePage />}/>
              <Route path='/collection/playlists' element={<FavouritesPage />}/>
              <Route path='/genre/podcasts-web' element={<PodcastsPage />}/>
              <Route path='/show/:id' element={<ShowPage />}/>
              <Route path='*' element={<PageNotFound />}/>
          </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
