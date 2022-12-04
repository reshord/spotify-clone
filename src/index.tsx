import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer, { inititalState } from './utils/reduces';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BannerToAuth from './components/BannerToAuth';
import PageNotFound from './components/PageNotFound';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import Playlists from './components/Content/Playlists/AllPlaylists';
import PlaylistPage from './components/Content/Playlists/PlaylistPage';
import AuthPage from './components/Auth/AuthPage';
import SearchPage from './components/Search/SearchPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <StateProvider initialState={inititalState} reducer={reducer}>
    <Provider store={store}>
        <BrowserRouter>    
          <Routes>
              <Route path='/' element={<App />}/>
              <Route path='/section/:title' element={<Playlists />}/>
              <Route path='/playlist/:playlist' element={<PlaylistPage />}/>
              <Route path='/auth' element={<AuthPage />}/>
              <Route path='/search' element={<SearchPage />}/>
              <Route path='*' element={<PageNotFound />}/>
          </Routes>
      </BrowserRouter>
    </Provider>


    </StateProvider>

  </React.StrictMode>
);
