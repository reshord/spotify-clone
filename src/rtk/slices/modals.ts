import { createSlice } from "@reduxjs/toolkit";

interface IState {
    mobileModal: boolean
    modalToAuth: {
        img: string
        toggle: boolean
    }
}

const initialState: IState = {
    mobileModal: false,
    modalToAuth: {
        img: '',
        toggle: false
    }
}

const Modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setToggleModal: (state, action) => {
            state.mobileModal = action.payload
        },
        setModalToAuth: (state, action) => {
            state.modalToAuth.toggle = action.payload.toggle
            state.modalToAuth.img = action.payload.img
        }
    }
})

export const {setToggleModal, setModalToAuth} = Modals.actions
export default Modals.reducer