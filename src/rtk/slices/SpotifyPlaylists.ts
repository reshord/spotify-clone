import { createSlice } from "@reduxjs/toolkit";
import { ExecOptionsWithStringEncoding } from "child_process";
import { IAllPlaylists, IPlaylist, ISongInfo } from "../../types/types";
import { getPlaylistsSongs } from "../axios";
import { addSongsToPlaylist } from "../hooks/addSongsToPlaylist";



interface IState {
        messages: string
        currentSection: {
            title: string
            list: null | IPlaylist[]
            type?: string
        }
        currentPlaylist: {
            id: string
            title: string
            songs: null | ISongInfo[]
            img: string
            description: string
        }
        SpotifyPlaylists: IPlaylist[]
        Mood: IPlaylist[]
}

const initialState: IState = {
        messages: '',
        currentSection: {
            title: '',
            list: null,
            type: ''
        },
        currentPlaylist: {
            id: '',
            title: '',
            songs: null,
            img: '',
            description: ''
        },
        SpotifyPlaylists: [
                {
                    id: '37i9dQZF1DXcBWIGoYBM5M',
                    img: "https://i.scdn.co/image/ab67706f0000000255d4466ee6bb4a1e484f4588",
                    title: "Today's Top Hits",
                    description: "Taylor Swift is on top of the Hottest 50!",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX0XUsuxWHRQd',
                    img: "https://i.scdn.co/image/ab67706f00000002a7c87745d3b0f192d0e23556",
                    title: "RapCaviar",
                    description: "Music from Drake, 21 Savage, Lil Uzi Vert and more.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX5Ejj0EkURtP',
                    img: "https://i.scdn.co/image/ab67706f00000002cc30c9c5cf2114e3efd90d1b",
                    title: "All out 2010s",
                    description: "The biggest songs of the 2010s.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DWXRqgorJj26U',
                    img: "https://i.scdn.co/image/ab67706f00000002b5d03b4eccf9aa6b902d0666",
                    title: "Rock Classics",
                    description: "Rock legends & epic songs that continue to inspire generations. Cover: Guns N' Roses",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX10zKzsJ2jva',
                    img: "https://i.scdn.co/image/ab67706f000000021b2ec90f8b93523933399657",
                    title: "Viva Latino",
                    description: "Today's top Latin hits, elevando nuestra música. Cover: Paulo Londra",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX4WYpdgoIcn6',
                    img: "https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361",
                    title: "Chill Hits",
                    description: "Kick back to the best new and recent chill hits.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX4WYpdgoIcn6',
                    img: "https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361",
                    title: "Chill Hits",
                    description: "Kick back to the best new and recent chill hits.",
                    songs: []
                },
        ],
        Mood: [
                        {
                            id: '37i9dQZF1DX3rxVfibe1L0',
                            img: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
                            title: "Mood Booster",
                            description: "Get happy with today's dose of feel-good songs!",
                            songs: []
                        },
                        {
                            id: '37i9dQZF1DX9XIFQuFvzM4',
                            img: "https://i.scdn.co/image/ab67706f0000000213a02d059c0479e65a850267",
                            title: "Feelin' Good",
                            description: "Feel good with this positively timeless playlist!",
                            songs: []
                        },
                        {
                            id: '37i9dQZF1DX2pSTOxoPbx9',
                            img: "https://i.scdn.co/image/ab67706f00000002a6e2870c97bde5e2719c20b8",
                            title: "Dark & Stormy",
                            description: "Beautifully dark, dramatic tracks.",
                            songs: []
                        },
                        {
                            id: '37i9dQZF1DXcEKFjZJYZcc',
                            img: "https://i.scdn.co/image/ab67706f00000002f68ba9973e4f1f0cdf268ccd",
                            title: "Feel Good Piano",
                            description: "Happy vibes for an upbeat morning.",
                            songs: []
                        },
                        {
                            id: '37i9dQZF1DX6GwdWRQMQpq',
                            img: "https://i.scdn.co/image/ab67706f000000025a82853306e0a01ea4d7895b",
                            title: "Feelin' Myself",
                            description: "The hip-hop playlist that's a whole mood. Art By Laci Jordan; Cover: Saweetie",
                            songs: []
                        },
                        {
                            id: '37i9dQZF1DWSqBruwoIXkA',
                            img: "https://i.scdn.co/image/ab67706f00000002c0d9b0a600352ab5d14abe70",
                            title: "sad hour",
                            description: "Somehow heartbreak feels good in a place like this. Cover: Taylor Swift",
                            songs: []
                        },
        ],
    }

const playlists = createSlice({
    name: "playlists",
    initialState,
    reducers: {
        setCurrentSection: (state, action) => {
            state.currentSection.list = action.payload.list
            state.currentSection.title = action.payload.title
        },
        setCurrentPlaylist: (state, action) => {
            state.currentPlaylist.songs = action.payload.songs
            state.currentPlaylist.title = action.payload.title
            state.currentPlaylist.description = action.payload.description
            state.currentPlaylist.img = action.payload.img
        },
    },
    extraReducers: {
        [getPlaylistsSongs.pending.toString()]: (state) => {
            state.messages = 'Loading...'
        },
        [getPlaylistsSongs.fulfilled.toString()]: (state, action) => {
                if(action.payload.type === 'ADD_SPOTIFY_SONGS') {
                    state.SpotifyPlaylists.filter(el => {

                        if(el.id === action.payload.data.id) {
                            const items = action.payload.data.tracks.items
                            const songsList = addSongsToPlaylist(items)
                            el.songs = songsList
                            state.currentPlaylist.songs = songsList
                        }
                    })
                }
                else if(action.payload.type === 'ADD_MOOD_SONGS') {
                    state.Mood.filter(el => {
                        if(el.id === action.payload.data.id) {
                            const items = action.payload.data.tracks.items
                            const songsList = addSongsToPlaylist(items)
        
                            el.songs = songsList
                            state.currentPlaylist.songs = songsList
                        }
                    })
                }
        },
        [getPlaylistsSongs.rejected.toString()]: (state) => {
            state.messages = 'something went wrong'
        }
    }
})

export const {setCurrentSection, setCurrentPlaylist} = playlists.actions
export default playlists