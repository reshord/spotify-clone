import {configureStore} from '@reduxjs/toolkit'
import Auth from './slices/Auth'
import Favourites from './slices/Favourites'
import Genres from './slices/Genres'
import Modals from './slices/modals'
import playlists from './slices/SpotifyPlaylists'
import TracksPlayer from './slices/TracksPlayer'
import Shows from './slices/Show'

export const store = configureStore({
    reducer: {
        playlists: playlists.reducer,
        genres: Genres,
        Modals: Modals,
        auth: Auth,
        favourites: Favourites,
        player: TracksPlayer,
        shows: Shows
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch