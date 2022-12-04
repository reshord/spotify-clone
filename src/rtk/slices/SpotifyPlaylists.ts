import { createSlice } from "@reduxjs/toolkit";
import { IAllPlaylists, IPlaylist, ISongInfo } from "../../types/types";



interface IState {
        currentSection: {
            title: string
            list: null | IPlaylist[]
        }
        currentPlaylist: {
            title: string
            songs: null | ISongInfo[]
            description: string
        }
        SpotifyPlaylists: IPlaylist[]
        Mood: IPlaylist[]
}

const initialState: IState = {
        currentSection: {
            title: '',
            list: null
        },
        currentPlaylist: {
            title: '',
            songs: null,
            description: ''
        },
        SpotifyPlaylists: [
                {
                    id: 1,
                    img: "https://i.scdn.co/image/ab67706f0000000255d4466ee6bb4a1e484f4588",
                    title: "Today's Top Hits",
                    description: "Taylor Swift is on top of the Hottest 50!",
                    songs: [
                        {"number": 1, "author": "Taylor Swift", "img": "https://i.scdn.co/image/ab67616d00004851bb54dde68cd23e2a268ae0f5", title: "Anti-Hero", albumName: "Midnights", dateUpdate: "6 дней назад", songTime: "3:20"},
                        {"number": 2, "author": "Sam Smith, Kim Petras", "img": "https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4", title: "Unholy (feat. Kim Petras)", albumName: "Unholy (feat. Kim Petras)", dateUpdate: "6 дней назад", songTime: "2:36"},
                        {"number": 3, "author": "Beyonce", "img": "https://i.scdn.co/image/ab67616d000048510e58a0f8308c1ad403d105e7", title: "CUFF IT", albumName: "RENAISSANCE", dateUpdate: "6 дней назад", songTime: "3:45"},
                        {"number": 4, "author": "Harry Styles", "img": "https://i.scdn.co/image/ab67616d00004851b46f74097655d7f353caab14", title: "As It Was", albumName: "As It Was", dateUpdate: "6 дней назад", songTime: "2:47"},
                        {"number": 5, "author": "Rema, Selena Gomez", "img": "https://i.scdn.co/image/ab67616d00004851a3a7f38ea2033aa501afd4cf", title: "Calm Down (with Selena Gomez)", albumName: "Calm Down (with Selena Gomez)", dateUpdate: "6 дней назад", songTime: "3:59"},
                        {"number": 6, "author": "Drake, 21 Savage", "img": "https://i.scdn.co/image/ab67616d0000485102854a7060fccc1a66a4b5ad", title: "Rich Flex", albumName: "Her Loss", dateUpdate: "6 дней назад", songTime: "3:59"},
                    ]
                },
                {
                    id: 2,
                    img: "https://i.scdn.co/image/ab67706f00000002a7c87745d3b0f192d0e23556",
                    title: "RapCaviar",
                    description: "Music from Drake, 21 Savage, Lil Uzi Vert and more.",
                    songs: [
                        {"number": 1, "author": "Metro Boomin, Travis Scott, 21 Savage", "img": "https://i.scdn.co/image/ab67616d00004851d93a35654cb16dc6a1b56228", title: "Niagara Falls", albumName: "HEROES & VILLAINS", dateUpdate: "8 hours ago", songTime: "3:27"},
                        {"number": 2, "author": "Drake, 21 Savage", "img": "https://i.scdn.co/image/ab67616d0000485102854a7060fccc1a66a4b5ad", title: "Rich Flex", albumName: "Her Loss", dateUpdate: "8 hours ago", songTime: "3:59"},
                        {"number": 3, "author": "Quavo, Takeoff, YoungBoy Never Broke Again", "img": "https://i.scdn.co/image/ab67616d00004851ffe5b62233340cb6d453fc2f", title: "To The Bone (feat. YoungBoy Never Broko Again)", albumName: "Only Built For Infinity Links", dateUpdate: "8 hours ago", songTime: "4:43"},
                        {"number": 4, "author": "Metro Boomin, Future, Chris Brown", "img": "https://i.scdn.co/image/ab67616d00004851d93a35654cb16dc6a1b56228", title: "Superhero (Heroes & Villains) [with Future]]", albumName: "HEROES & VILLAINS", dateUpdate: "8 hours ago", songTime: "3:02"},
                        {"number": 5, "author": "Latto, Glorilla, Gangsta Boo", "img": "https://i.scdn.co/image/ab67616d0000485137df84cf0611962781f24516", title: "FTCU (feat. GloRilla & Gangsta Boo)", albumName: "FTCU (feat. GloRilla & Gangsta Boo)", dateUpdate: "8 hours ago", songTime: "2:25"},
                        {"number": 6, "author": "Lil Baby", "img": "https://i.scdn.co/image/ab67616d0000485166b04b41fa6f8908dce86695", title: "Not Finished", albumName: "It's Only Me", dateUpdate: "8 hours ago", songTime: "2:43"},
                    ]
                },
                {
                    id: 3,
                    img: "https://i.scdn.co/image/ab67706f00000002cc30c9c5cf2114e3efd90d1b",
                    title: "All out 2010s",
                    description: "The biggest songs of the 2010s.",
                    songs: [
                        {"number": 1, "author": "Ed Sheeran", "img": "https://i.scdn.co/image/ab67616d0000485113b3e37318a0c247b550bccd", title: "Thinking out Loud", albumName: "x (Deluxe Edition)", dateUpdate: "9 Oct. 2022", songTime: "4:41"},
                        {"number": 2, "author": "Avicii", "img": "https://i.scdn.co/image/ab67616d00004851e14f11f796cef9f9a82691a7", title: "Wake Me Up", albumName: "True", dateUpdate: "9 Oct. 2022", songTime: "4:07"},
                        {"number": 3, "author": "Justin Bieber", "img": "https://i.scdn.co/image/ab67616d00004851f46b9d202509a8f7384b90de", title: "Sorry", albumName: "Purpose (Deluxe)", dateUpdate: "9 Oct. 2022", songTime: "3:20"},
                        {"number": 4, "author": "Ariana Grande", "img": "https://i.scdn.co/image/ab67616d00004851deec12a28d1e336c5052e9aa", title: "One Last Time", albumName: "Delirium (Deluxe)", dateUpdate: "9 Oct. 2022", songTime: "4:12"},
                        {"number": 5, "author": "The Chainsmokers", "img": "https://i.scdn.co/image/ab67616d000048510c13d3d5a503c84fcc60ae94", title: "Paris", albumName: "Memories...Do Not Open", dateUpdate: "9 Oct. 2022", songTime: "3:41"},
                        {"number": 6, "author": "Sam Smith", "img": "https://i.scdn.co/image/ab67616d00004851b11bdc91cb9ac6b14f5c1dae", title: "Stay With Me", albumName: "In The Lonely Hour", dateUpdate: "9 Oct. 2022", songTime: "2:52"},
                    ]
                },
                {
                    id: 4,
                    img: "https://i.scdn.co/image/ab67706f00000002b5d03b4eccf9aa6b902d0666",
                    title: "Rock Classics",
                    description: "Rock legends & epic songs that continue to inspire generations. Cover: Guns N' Roses",
                    songs: [
                        {"number": 1, "author": "The Rolling Stones", "img": "https://i.scdn.co/image/ab67616d000048512af30c881bb23cfb82a8cf99", title: "Gimme Shelter", albumName: "Let It Bleed", dateUpdate: "11 days ago", songTime: "4:30"},
                        {"number": 2, "author": "AC/DC", "img": "https://i.scdn.co/image/ab67616d000048510b51f8d91f3a21e8426361ae", title: "Back In Black", albumName: "Back In Black", dateUpdate: "11 days ago", songTime: "4:15"},
                        {"number": 3, "author": "Radiohead", "img": "https://i.scdn.co/image/ab67616d00004851df55e326ed144ab4f5cecf95", title: "Creep", albumName: "Pablo Honey", dateUpdate: "11 days ago", songTime: "3:58"},
                        {"number": 4, "author": "Roger Waters", "img": "https://i.scdn.co/image/ab67616d0000485164589862c9b6089ad967e21a", title: "Comfortably Numb 2022", albumName: "Comfortably Numb 2022", dateUpdate: "11 days ago", songTime: "8:30"},
                        {"number": 5, "author": "Jimi Hendrix", "img": "https://i.scdn.co/image/ab67616d00004851522088789d49e216d9818292", title: "All Along the Watchtower", albumName: "Electric Ladyland", dateUpdate: "11 days ago", songTime: "4:00"},
                        {"number": 6, "author": "KISS", "img": "https://i.scdn.co/image/ab67616d00004851694dc8db52fc630a9bf5d5e4", title: "Detroit Rock City", albumName: "Smashes Thrashes & Hits", dateUpdate: "11 days ago", songTime: "3:47"},
                    ]
                },
                {
                    id: 5,
                    img: "https://i.scdn.co/image/ab67706f000000021b2ec90f8b93523933399657",
                    title: "Viva Latino",
                    description: "Today's top Latin hits, elevando nuestra música. Cover: Paulo Londra",
                    songs: [
                        {"number": 1, "author": "Arcangel, Bad Bunny", "img": "https://i.scdn.co/image/ab67616d000048511e0950bcdb5495e2038e0d14", title: "La Jumpa", albumName: "La Jumpa", dateUpdate: "1 day ago", songTime: "4:15"},
                        {"number": 2, "author": "KAROL G, Ovy On The Drums", "img": "https://i.scdn.co/image/ab67616d000048511068a681551526e045f4dc0d", title: "CAIRO", albumName: "CAIRO", dateUpdate: "1 day ago", songTime: "3:21"},
                        {"number": 3, "author": "Ozuna, Feid", "img": "https://i.scdn.co/image/ab67616d0000485180f5e31c0a66b5aed16d98e3", title: "Hey Mor", albumName: "Hey Mor", dateUpdate: "1 day ago", songTime: "3:16"},
                        {"number": 4, "author": "Shakira, Ozuna", "img": "https://i.scdn.co/image/ab67616d0000485127b5b57343431306a7f9daec", title: "Monotonia", albumName: "Monotonia", dateUpdate: "1 day ago", songTime: "2:38"},
                        {"number": 5, "author": "Paulo Londra", "img": "https://i.scdn.co/image/ab67616d000048517d43a83165d3d237f6463102", title: "Por Deporte", albumName: "Back To The Game", dateUpdate: "1 day ago", songTime: "2:49"},
                        {"number": 6, "author": "Manuel Turizo", "img": "https://i.scdn.co/image/ab67616d00004851c9f744b0d62da795bc21d04a", title: "La Bachata", albumName: "La Bachata", dateUpdate: "1 day ago", songTime: "2:42"},
                    ]
                },
                {
                    id: 6,
                    img: "https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361",
                    title: "Chill Hits",
                    description: "Kick back to the best new and recent chill hits.",
                    songs: [
                        {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                    ]
                },
                {
                    id: 7,
                    img: "https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361",
                    title: "Chill Hits",
                    description: "Kick back to the best new and recent chill hits.",
                    songs: [
                        {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                        {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                    ]
                },
        ],
        Mood: [
                        {
                            id: 1,
                            img: "https://i.scdn.co/image/ab67706f00000002bd0e19e810bb4b55ab164a95",
                            title: "Mood Booster",
                            description: "Get happy with today's dose of feel-good songs!",
                            songs: [
                                {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                            ]
                        },
                        {
                            id: 2,
                            img: "https://i.scdn.co/image/ab67706f0000000213a02d059c0479e65a850267",
                            title: "Feelin' Good",
                            description: "Feel good with this positively timeless playlist!",
                            songs: [
                                {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                            ]
                        },
                        {
                            id: 3,
                            img: "https://i.scdn.co/image/ab67706f00000002a6e2870c97bde5e2719c20b8",
                            title: "Dark & Stormy",
                            description: "Beautifully dark, dramatic tracks.",
                            songs: [
                                {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                            ]
                        },
                        {
                            id: 4,
                            img: "https://i.scdn.co/image/ab67706f00000002f68ba9973e4f1f0cdf268ccd",
                            title: "Feel Good Piano",
                            description: "Happy vibes for an upbeat morning.",
                            songs: [
                                {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                            ]
                        },
                        {
                            id: 5,
                            img: "https://i.scdn.co/image/ab67706f000000025a82853306e0a01ea4d7895b",
                            title: "Feelin' Myself",
                            description: "The hip-hop playlist that's a whole mood. Art By Laci Jordan; Cover: Saweetie",
                            songs: [
                                {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                            ]
                        },
                        {
                            id: 6,
                            img: "https://i.scdn.co/image/ab67706f00000002c0d9b0a600352ab5d14abe70",
                            title: "sad hour",
                            description: "Somehow heartbreak feels good in a place like this. Cover: Taylor Swift",
                            songs: [
                                {"number": 1, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 2, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 3, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 4, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 5, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                                {"number": 6, "author": "", "img": "", title: "", albumName: "", dateUpdate: "", songTime: ""},
                            ]
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
        }
    }
})

export const {setCurrentSection, setCurrentPlaylist} = playlists.actions
export default playlists