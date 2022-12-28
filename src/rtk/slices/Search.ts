import { createSlice } from "@reduxjs/toolkit";
import { ISearchedAlbums, ISearchedArtists, ISearchedPlaylists, ISearchedTracks } from "../../types/types";
import { getSearched } from "../axios";
import { getNewSearchResultsAlbums, getNewSearchResultsArtists, getNewSearchResultsPlaylists, getNewSearchResultsTracks } from "../hooks/addSongsToPlaylist";

interface IState {
    searchedTracks: null | ISearchedTracks[]
    searchedArtists: null | ISearchedArtists[]
    searchedPlaylists: null | ISearchedPlaylists[]
    searchedAlbums: null | ISearchedAlbums[]
    messages: string
}

const initialState: IState = {
    searchedTracks: null,
    searchedArtists: null,
    searchedPlaylists: null,
    searchedAlbums: null,
    messages: ''
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
        }
    },
    extraReducers: {
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
    }
})

export const {deleteSearchResults} = SearchSlice.actions
export default SearchSlice.reducer