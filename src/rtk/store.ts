import {configureStore} from '@reduxjs/toolkit'
import Auth from './slices/Auth'
import Genres from './slices/Genres'
import Modals from './slices/modals'
import playlists from './slices/SpotifyPlaylists'

export const store = configureStore({
    reducer: {
        playlists: playlists.reducer,
        genres: Genres,
        Modals: Modals,
        auth: Auth
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch