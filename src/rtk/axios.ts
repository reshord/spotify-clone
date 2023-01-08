import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { ICurrentArtistTopTracks } from "../types/types";

interface IParams {
    id: string | undefined
    type: string | undefined
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

interface SearchPlaylistSongsParams {
    id: string | undefined
    name: string | undefined
    description: string | undefined
    img: string | undefined
    songAuthorId: string | undefined
}
interface SearchArtistParams {
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

export const getCurrentSearchPlaylistsSongs = createAsyncThunk(
    'currentSearchPlaylistSongs', 
    async ({id, name, img, description}: SearchPlaylistSongsParams) => {
    
    const token = localStorage.getItem('token')

    try {
        const songsList = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
        return {data: songsList.data, id, name, img, description}
    }
    catch(e) {
        console.log(e);
    }
})
export const getCurrentSearchArtist = createAsyncThunk(
    'getCurrentSearchArtist', 
    async ({id}: SearchArtistParams) => {
    
    const token = localStorage.getItem('token')

    try {
        const foundArtist = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
        return {data: foundArtist.data}
    }
    catch(e) {
        console.log(e);
    }
})
export const getCurrentArtistTopTracks = createAsyncThunk(
    'getCurrentArtistTopTracks', 
    async (id: string | undefined) => {
    
    const token = localStorage.getItem('token')

    try {
        const foundArtistToptTracks = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
        return {data: foundArtistToptTracks.data}
    }
    catch(e) {
        console.log(e);
    }
})
export const getRelatedArtists = createAsyncThunk(
    'getRelatedArtists', 
    async (id: string | undefined) => {
    
    const token = localStorage.getItem('token')

    try {
        const relatedArtistsList = await axios.get(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
        // debugger
        return {data: relatedArtistsList.data.artists}
    }
    catch(e) {
        console.log(e);
    }
})