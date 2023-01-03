import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchedAlbums, ISearchedArtists, ISearchedPlaylists, ISearchedTracks, ISongInfo } from "../../types/types";
import { getCurrentSearchPlaylistsSongs, getSearched } from "../axios";
import { addSongsToPlaylist, getNewSearchResultsAlbums, getNewSearchResultsArtists, getNewSearchResultsPlaylists, getNewSearchResultsTracks } from "../hooks/addSongsToPlaylist";

interface IState {
    searchedTracks: null | ISearchedTracks[]
    searchedArtists: null | ISearchedArtists[]
    searchedPlaylists: null | ISearchedPlaylists[]
    searchedAlbums: null | ISearchedAlbums[]
    messages: string
    currentSearchValue: string
    currentSearchPlaylist: {
        songs: ISongInfo[] | undefined
        name: string | undefined
        description: string
        image: string | undefined
    }
    searchHistory: ISearchedTracks[] | []
}

const initialState: IState = {
    searchedTracks: null,
    searchedArtists: null,
    searchedPlaylists: null,
    searchedAlbums: null,
    messages: '',
    currentSearchValue: '',
    currentSearchPlaylist: {
        name: '',
        songs: [],
        description: '',
        image: ''
    },
    searchHistory: []
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        deleteSearchResults: (state) => {
            state.searchedAlbums = null
            state.searchedArtists = null
            state.searchedPlaylists = null
            state.searchedTracks = null
        },
        setCurrentSearchValue: (state, {payload}: PayloadAction<string>) => {
            state.currentSearchValue = payload
        },
        setItemToSearchHistory: (state, action) => {
            const searchedItem = state.searchHistory.filter(el => el.id === action.payload.id)
            if(!searchedItem.length) {
                state.searchHistory = [...state.searchHistory, action.payload]
            }
        },
        deleteItemSearchHistory: (state, action) => {
            state.searchHistory = state.searchHistory.filter(el => el.id !== action.payload.id)
        }
    },
    extraReducers: {
        // Get Searched
        [getSearched.pending.toString()]: (state) => {
            state.messages = 'process..'
        },
        [getSearched.fulfilled.toString()]: (state, action) => {
            state.messages = 'fulfilled'
            const {tracks, artists, playlists, albums} = action.payload

            state.searchedAlbums = getNewSearchResultsAlbums(albums.items)
            state.searchedArtists = getNewSearchResultsArtists(artists.items)
            state.searchedPlaylists = getNewSearchResultsPlaylists(playlists.items)
            state.searchedTracks = getNewSearchResultsTracks(tracks.items)
        },
        [getSearched.pending.toString()]: (state) => {

        },
        // Get Current Search Playlists Songs
        [getCurrentSearchPlaylistsSongs.pending.toString()]: (state) => {
            state.messages = 'process..'
        },
        [getCurrentSearchPlaylistsSongs.fulfilled.toString()]: (state, action) => {
            state.messages = 'fulfilled'
            const items = action.payload.data.tracks.items
            const songsList = addSongsToPlaylist(items)
            state.currentSearchPlaylist.songs = songsList
            state.currentSearchPlaylist.image = action.payload.img
            state.currentSearchPlaylist.name = action.payload.name
            state.currentSearchPlaylist.description = action.payload.description
        },
        [getCurrentSearchPlaylistsSongs.pending.toString()]: (state) => {

        },
    }
})

export const {
    deleteSearchResults, 
    setCurrentSearchValue, 
    setItemToSearchHistory,
    deleteItemSearchHistory} = SearchSlice.actions

export default SearchSlice.reducer