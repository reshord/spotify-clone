import { createSlice } from "@reduxjs/toolkit";

interface IState {
    mobileModal: boolean
}

const initialState: IState = {
    mobileModal: true
}

const Modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setToggleModal: (state, action) => {
            state.mobileModal = action.payload
        }
    }
})

export const {setToggleModal} = Modals.actions
export default Modals.reducer