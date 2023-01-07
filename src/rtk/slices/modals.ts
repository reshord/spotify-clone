import { createSlice } from "@reduxjs/toolkit";

interface IState {
    mobileModal: boolean
    modalToAuth: {
        img: string
        toggle: boolean
    }
    aboutAuthorModal: boolean,
    searchMobileModal: boolean
    favoriteModal: boolean

}

const initialState: IState = {
    mobileModal: false,
    modalToAuth: {
        img: '',
        toggle: false
    },
    aboutAuthorModal: false,
    searchMobileModal: false,
    favoriteModal: false

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
        },
        setSearchMobileModal: (state, action) => {
            state.searchMobileModal = action.payload
        },
        toggleFavoriteModal: (state, action) => {
            state.favoriteModal = action.payload
        }
    }
})

export const {setToggleModal, setModalToAuth, aboutAuthorModal, toggleFavoriteModal} = Modals.actions
export default Modals.reducer