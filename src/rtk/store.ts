import {configureStore} from '@reduxjs/toolkit'
import Genres from './slices/Genres'
import playlists from './slices/SpotifyPlaylists'

export const store = configureStore({
    reducer: {
        playlists: playlists.reducer,
        genres: Genres
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch