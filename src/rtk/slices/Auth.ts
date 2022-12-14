import { createSlice } from "@reduxjs/toolkit";

interface IState {
    token: string | null
}

const initialState: IState = {
    token: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        deleteToken: (state) => {
            state.token = null
        }
    }
})

export const {setToken, deleteToken} = auth.actions
export default auth.reducer