import { createSlice } from "@reduxjs/toolkit";
import { ISongInfo } from "../../types/types";
import { getCurrentlyPlayingTrack } from "../../axios";

export interface ICurrentPlayingTrack {
    id: string
    img: string
    title: string
    author: string
}

interface IState {
    isPlaying: boolean
    currentPlayingSong: ISongInfo | null
}

const initialState: IState = {
    isPlaying: false,
    currentPlayingSong: null
}

const TracksPlayer = createSlice({
    name: 'tracksPlayer',
    initialState,
    reducers: {
        setCurrentPlayingSong: (state, action) => {
            state.currentPlayingSong = action.payload
            state.isPlaying = true
            // debugger
        },
        setStopSong: (state) => {
            state.isPlaying = false
        },
        deleteCurrentPlayingSong: (state) => {
            state.isPlaying = false
            state.currentPlayingSong = null
        }
    }
    // extraReducers: {
    //     // Get Currently Playing Track
    //     [getCurrentlyPlayingTrack.pending.toString()]: (state) => {

    //     },
    //     [getCurrentlyPlayingTrack.fulfilled.toString()]: (state, action) => {
    //         let currentlyPlayingTrackCurrentPlayingTrack: ICurrentPlayingTrack = {
    //             id: action.payload.item.id,
    //             img: action.payload.item.album.images[2].url,
    //             title: action.payload.item.name,
    //             author: action.payload.item.artists[0].name,
    //         }
    //         state.currentlyPlayingTrack = currentlyPlayingTrackCurrentPlayingTrack
    //     },
    //     [getCurrentlyPlayingTrack.rejected.toString()]: (state) => {

    //     },
    // }
})

export const {setCurrentPlayingSong, setStopSong, deleteCurrentPlayingSong} = TracksPlayer.actions
export default TracksPlayer.reducer