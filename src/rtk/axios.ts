import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

interface IParams {
    id: string
    type: string
}
interface IShowParams {
    id: string | undefined
    token: string | null
}
interface ISearchParams {
    token: string | null
    value: string
}

interface IPlaylists {
    token: string | null
    id: string | undefined
}

export const getPlaylistsSongs = createAsyncThunk(
    'getSongs', 
    async ({id, type}: IParams) => {
    
    const token = localStorage.getItem('token')

    try {
        const songsList = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
        return {type, data: songsList.data}
    }
    catch(e) {
        console.log(e);
    }
})



export const getProfile = createAsyncThunk(
       'profile', 
    async (token: string | null) => {
        try {
            const profile = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
        })
            return profile.data
        }
        catch(e) {
            console.log(e);
        }
})
export const getCurrentlyPlayingTrack = createAsyncThunk(
       'currentlyPlayingTrack', 
    async (token: string | null) => {
        try {
            const {data} = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
        })
            if(data !== '') {
                return data
            }
        }
        catch(e) {
            console.log(e);
        }
})
export const getShows = createAsyncThunk(
       'show', 
    async ({id, token}: IShowParams) => {
        try {
            const data = await axios.get(`https://api.spotify.com/v1/shows/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
            return data.data
        }
        catch(e) {
            console.log(e);
        }
})

export const getSearched = createAsyncThunk(
       'search', 
    async ({token, value}: ISearchParams) => {
        try {
            const {data} = await axios.get(`https://api.spotify.com/v1/search?q=${value}&type=album,track,artist,playlist`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            return data
        }
        catch(e) {
            console.log(e);
        }
})

