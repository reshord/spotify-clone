import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import Playlists from './components/Content/Playlists/AllPlaylists';
import PlaylistPage from './components/Content/Playlists/PlaylistPage';
import AuthPage from './components/Auth/AuthPage';
import SearchPage from './components/Search/SearchPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import FavouritesPage from './components/Favourites/Favourites';
import PodcastsPage from './components/Podcasts/PodcastsPage';
import ShowPage from './components/Podcasts/ShowPage/ShowPage';
import SearchModal from './components/Search/SearchModal';
import RecentSearches from './components/Search/RecentSearches';
import SearchedArtistPage from './components/Search/SearchedArtistPage/SearchedArtistPage';
import RelatedArtistsPage from './components/Search/RelatedArtistsContainers/RelatedArtistsPage';
import FavoritesTracksPage from './components/Favourites/FavoritesTracksPage';

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
              <Route path='/search/recent' element={<SearchModal />}/>
              <Route path='/search/history' element={<RecentSearches />}/>
              <Route path='/artist/:id' element={<SearchedArtistPage />}/>
              <Route path='/artist/:id/related' element={<RelatedArtistsPage />}/>
              <Route path='/collection/tracks' element={<FavoritesTracksPage />}/>

              <Route path='*' element={<PageNotFound />}/>
          </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
