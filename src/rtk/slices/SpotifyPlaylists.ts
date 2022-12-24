import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExecOptionsWithStringEncoding } from "child_process";
import { IAllPlaylists, IPlaylist, ISongInfo } from "../../types/types";
import { getCurrentlyPlayingTrack, getPlaylistsSongs } from "../axios";
import { addSongsToPlaylist } from "../hooks/addSongsToPlaylist";




interface IState {
        favoritesList: ISongInfo[] | []
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
        Focus: IPlaylist[]
        Dream: IPlaylist[]
}

const initialState: IState = {
        favoritesList: [],
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
        Focus: [
                {
                    id: '37i9dQZF1DWWQRwui0ExPn',
                    img: "https://i.scdn.co/image/ab67706f00000003abaf6c3c6a4b29f8a4565a86",
                    title: "lofi beats",
                    description: "The chillest beats to help you relax, study, code, and focus.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX5trt9i14X7j',
                    img: "https://i.scdn.co/image/ab67706f00000003863b311d4b787ed621f7e696",
                    title: "Coding Mode",
                    description: "Dedicated to all the programmers out there.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DWZeKCadgRdKQ',
                    img: "https://i.scdn.co/image/ab67706f000000035551996f500ba876bda73fa5",
                    title: "Deep Focus",
                    description: "Keep calm and focus with ambient and post-rock music.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX4sWSpwq3LiO',
                    img: "https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6",
                    title: "Peaceful Piano",
                    description: "Relax and indulge with beautiful piano pieces",
                    songs: []
                },
                {
                    id: '37i9dQZF1DWV7EzJMK2FUI',
                    img: "https://i.scdn.co/image/ab67706f000000036808b15e5db5e5569aae1471",
                    title: "Jazz in the Background",
                    description: "Soft instrumental Jazz for all your activities.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX8Uebhn9wzrS',
                    img: "https://i.scdn.co/image/ab67706f000000035b0a7b8408322a3b9ed15e1e",
                    title: "chill lofi study beats",
                    description: "The perfect study beats. Find your focus, crush your productivity.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DX0SM0LYsmbMT',
                    img: "https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b",
                    title: "Jazz Vibes",
                    description: "The original chill instrumental beats playlist.",
                    songs: []
                },
                {
                    id: '0JQ5DAqbMKFCbimwdOYlsl',
                    img: "https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618",
                    title: "Workday Lounge",
                    description: "Lounge and chill out music for your workday.",
                    songs: []
                },
        ],
        Dream: [
                {
                    id: '37i9dQZF1DWZd79rJ6a7lp',
                    img: "https://i.scdn.co/image/ab67706f00000003bc9438e3a6ff78076f8b1405",
                    title: "Sleep",
                    description: "Gentle ambient piano to help you fall asleep.",
                    songs: []
                },
                {
                    id: '37i9dQZF1DXdbkmlag2h7b',
                    img: "https://i.scdn.co/image/ab67706f00000003d2291e0c5d43a1b21a941031",
                    title: "DayDreamer",
                    description: "Drift away with enthralling instrumentals.",
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
        addSongToFavourites: (state, {payload}: PayloadAction<ISongInfo>) => {
            const foundFavourite = state.favoritesList.filter(el => el.id === payload.id)

            if(!foundFavourite.length) {
                state.favoritesList = [...state.favoritesList, payload]
                const res = state.currentPlaylist.songs?.map(el => {
                    if(el.id === payload.id) {
                        el.isFavourite = true
                        // return {
                        //     number: el.number,
                        //     title: el.title,
                        //     author: el.author,
                        //     albumName: el.albumName,
                        //     id: el.id,
                        //     img: el.img,
                        //     songNumber: el.songNumber,
                        //     isFavourite: true,
                            
                        // }
                    }
                })
            }
        }
    },
    extraReducers: {
        // Get Playlists Songs
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
                else if(action.payload.type === 'ADD_FOCUS_SONGS') {
                    state.Focus.filter(el => {
                        if(el.id === action.payload.data.id) {
                            const items = action.payload.data.tracks.items
                            const songsList = addSongsToPlaylist(items)
        
                            el.songs = songsList
                            state.currentPlaylist.songs = songsList
                        }
                    })
                }
                else if(action.payload.type === 'ADD_DREAM_SONGS') {
                    state.Dream.filter(el => {
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
        },
        
    }
})

export const {setCurrentSection, setCurrentPlaylist, addSongToFavourites} = playlists.actions
export default playlists