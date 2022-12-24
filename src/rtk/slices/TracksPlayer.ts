import { createSlice } from "@reduxjs/toolkit";
import { getCurrentlyPlayingTrack } from "../axios";

export interface ICurrentPlayingTrack {
    id: string
    img: string
    title: string
    author: string
}

interface IState {
    currentlyPlayingTrack: null | ICurrentPlayingTrack
    playerState: boolean
}

const initialState: IState = {
    currentlyPlayingTrack: null,
    playerState: false
}

const TracksPlayer = createSlice({
    name: 'tracksPlayer',
    initialState,
    reducers: {

    },
    extraReducers: {
        // Get Currently Playing Track
        [getCurrentlyPlayingTrack.pending.toString()]: (state) => {

        },
        [getCurrentlyPlayingTrack.fulfilled.toString()]: (state, action) => {
            let currentlyPlayingTrackCurrentPlayingTrack: ICurrentPlayingTrack = {
                id: action.payload.item.id,
                img: action.payload.item.album.images[2].url,
                title: action.payload.item.name,
                author: action.payload.item.artists[0].name,
            }
            state.currentlyPlayingTrack = currentlyPlayingTrackCurrentPlayingTrack
        },
        [getCurrentlyPlayingTrack.rejected.toString()]: (state) => {

        },
    }
})

export default TracksPlayer.reducer