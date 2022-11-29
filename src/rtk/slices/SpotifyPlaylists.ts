import { createSlice } from "@reduxjs/toolkit";
import { IPlaylist, ISongInfo } from "../../types/types";



interface IState {
    SpotifyPlaylists: IPlaylist[]
    Mood: IPlaylist[]
}

const initialState: IState = {
    SpotifyPlaylists: [
        {
            img: "https://i.scdn.co/image/ab67706f0000000255d4466ee6bb4a1e484f4588",
            title: "Today's Top Hits",
            description: "Taylor Swift is on top of the Hottest 50!",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f00000002a7c87745d3b0f192d0e23556",
            title: "RapCaviar",
            description: "Music from Drake, 21 Savage, Lil Uzi Vert and more.",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f00000002cc30c9c5cf2114e3efd90d1b",
            title: "All out 2010s",
            description: "The biggest songs of the 2010s.",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f00000002b5d03b4eccf9aa6b902d0666",
            title: "Rock Classics",
            description: "Rock legends & epic songs that continue to inspire generations. Cover: Guns N' Roses",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f000000021b2ec90f8b93523933399657",
            title: "Viva Latino",
            description: "Today's top Latin hits, elevando nuestra música. Cover: Paulo Londra",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361",
            title: "Chill Hits",
            description: "Kick back to the best new and recent chill hits.",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
    ],
    Mood: [
        {
            img: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
            title: "Mood Booster",
            description: "Get happy with today's dose of feel-good songs!",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f0000000213a02d059c0479e65a850267",
            title: "Feelin' Good",
            description: "Feel good with this positively timeless playlist!",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f00000002a6e2870c97bde5e2719c20b8",
            title: "Dark & Stormy",
            description: "Beautifully dark, dramatic tracks.",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f00000002f68ba9973e4f1f0cdf268ccd",
            title: "Feel Good Piano",
            description: "Happy vibes for an upbeat morning.",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f000000025a82853306e0a01ea4d7895b",
            title: "Feelin' Myself",
            description: "The hip-hop playlist that's a whole mood. Art By Laci Jordan; Cover: Saweetie",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
        {
            img: "https://i.scdn.co/image/ab67706f00000002c0d9b0a600352ab5d14abe70",
            title: "sad hour",
            description: "Somehow heartbreak feels good in a place like this. Cover: Taylor Swift",
            songs: [
                {"number": 1, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 2, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 3, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 4, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 5, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                {"number": 6, "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
            ]
        },
    ],

}

const playlists = createSlice({
    name: "playlists",
    initialState,
    reducers: {

    }
})

export default playlists