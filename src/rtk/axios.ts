import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

interface IParams {
    id: string
    type: string
}

export const getPlaylistsSongs = createAsyncThunk(
    'getSongs', 
async ({id, type}: IParams) => {
    
    const token = localStorage.getItem('token')

    try {
        const songsList = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        })
        return {type, data: songsList.data}
    }
    catch(e) {
        console.log(e);
    }
})