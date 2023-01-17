import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrentArtistTopTracks, IRelatedArtist, ISearchedAlbums, ISearchedArtist, ISearchedArtists, ISearchedPlaylists, ISearchedTracks, ISongInfo } from "../../types/types";
import { getCurrentArtistTopTracks, getCurrentSearchArtist, getCurrentSearchPlaylistsSongs, getRelatedArtists, getSearched } from "../axios";
import { addSongsToPlaylist, getNewSearchResultsAlbums, getNewSearchResultsArtists, getNewSearchResultsPlaylists, getNewSearchResultsTracks, getRelatedArtistsList, getSearchArtistTopTracks } from "../hooks/addSongsToPlaylist";

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
    isLoading: boolean
    currentSearchedArtist: ISearchedArtist | null
    currentArtistTopTracks: ISongInfo[] | null
    relatedArtists: IRelatedArtist[] | null
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
    searchHistory: [],
    isLoading: false,
    currentSearchedArtist: null,
    currentArtistTopTracks: null,
    relatedArtists: null
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
        },
        clearHistory: (state) => {
            state.searchHistory = []
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
            state.isLoading = true

        },
        [getCurrentSearchPlaylistsSongs.fulfilled.toString()]: (state, action) => {
            state.messages = 'fulfilled'
            const items = action.payload.data.tracks.items
            const songsList = addSongsToPlaylist(items)
            state.currentSearchPlaylist.songs = songsList
            state.currentSearchPlaylist.image = action.payload.img
            state.currentSearchPlaylist.name = action.payload.name
            state.currentSearchPlaylist.description = action.payload.description
            state.isLoading = false
        },
        [getCurrentSearchPlaylistsSongs.pending.toString()]: (state) => {
            state.isLoading = false
        },
        // Get Current Search Artist
        [getCurrentSearchArtist.pending.toString()]: (state, action) => {

        },
        [getCurrentSearchArtist.fulfilled.toString()]: (state, action) => {
            let currentArtist: ISearchedArtist = {
                image: action.payload.data.images[1].url,
                name: action.payload.data.name,
                id: action.payload.data.id
            }
            state.currentSearchedArtist = currentArtist
        },
        [getCurrentSearchArtist.rejected.toString()]: () => {

        },
        // Get Current Search Artist Top Tracks
        [getCurrentArtistTopTracks.pending.toString()]: (state) => {

        },
        [getCurrentArtistTopTracks.fulfilled.toString()]: (state, action) => {
            state.currentArtistTopTracks = getSearchArtistTopTracks(action.payload.data.tracks)

        },
        [getCurrentArtistTopTracks.rejected.toString()]: (state) => {
        },
        // Get Related Artists
        [getRelatedArtists.pending.toString()]: (state) => {
            
        },
        [getRelatedArtists.fulfilled.toString()]: (state, action) => {
            state.relatedArtists = getRelatedArtistsList(action.payload.data)
            // debugger
        },
        [getRelatedArtists.rejected.toString()]: (state) => {
        },
    }
})

export const {
    deleteSearchResults, 
    setCurrentSearchValue, 
    setItemToSearchHistory,
    deleteItemSearchHistory,
    clearHistory} = SearchSlice.actions

export default SearchSlice.reducer