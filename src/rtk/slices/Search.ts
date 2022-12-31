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
    }
}

const initialState: IState = {
    searchedTracks: null,
    searchedArtists: null,
    searchedPlaylists: null,
    searchedAlbums: null,
    messages: '',
    currentSearchValue: '',
    currentSearchPlaylist: {
        songs: []
    }
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

        },
        [getCurrentSearchPlaylistsSongs.pending.toString()]: (state) => {

        },
    }
})

export const {deleteSearchResults, setCurrentSearchValue} = SearchSlice.actions
export default SearchSlice.reducer