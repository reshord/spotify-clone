import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISongInfo } from "../../types/types";

interface IAction {
    id: string
    title: string
    author: string
    isFavourite: boolean
}

interface IState {
    favouritesList: IAction[] | []
    messages: string
}

const initialState: IState = {
    favouritesList: [],
    messages: '',
}

const Favourites = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addSongToFavourites: (state, {payload}: PayloadAction<IAction>) => {
            const foundFavourite = state.favouritesList.filter(el => el.id === payload.id)
            if(!foundFavourite.length) {
                payload.isFavourite = true
                state.favouritesList = [...state.favouritesList, payload]
            }
            state.messages = 'something went wrong'
        },
        deleteSongFavourites: (state, {payload}: PayloadAction<IAction>) => {
            state.favouritesList = state.favouritesList.filter(el => payload.id !== el.id)
        }
    }
})

export const {addSongToFavourites, deleteSongFavourites} = Favourites.actions
export default Favourites.reducer