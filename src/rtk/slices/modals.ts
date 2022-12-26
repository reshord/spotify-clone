import { createSlice } from "@reduxjs/toolkit";

interface IState {
    mobileModal: boolean
    modalToAuth: {
        img: string
        toggle: boolean
    }
    aboutAuthorModal: boolean
}

const initialState: IState = {
    mobileModal: false,
    modalToAuth: {
        img: '',
        toggle: false
    },
    aboutAuthorModal: false
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
        },
        aboutAuthorModal: (state, action) => {
            state.aboutAuthorModal = action.payload
        }
    }
})

export const {setToggleModal, setModalToAuth, aboutAuthorModal} = Modals.actions
export default Modals.reducer