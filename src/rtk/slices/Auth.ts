import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../axios";

interface IImage {
    height?: string | undefined
    url: string | undefined
    width?: string | undefined
}

interface IState {
    token: string | null
    messages: string
    profile: {
        display_name: string
        id: string
        images: IImage[] | null
    } | null
}

const initialState: IState = {
    token: null,
    messages: '',
    profile: {
         display_name: '',
         id: '',
         images: null
    },
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
    extraReducers: {
        //Get profile
        [getProfile.pending.toString()]: (state) => {
            state.messages = 'Loading...'
        },
        [getProfile.fulfilled.toString()]: (state, action) => {
            state.messages = 'Fulfilled'
            state.profile = action.payload
        },
        [getProfile.rejected.toString()]: (state) => {
            state.messages = 'something went wrong'
        },
    }
})

export const {setToken} = auth.actions
export default auth.reducer