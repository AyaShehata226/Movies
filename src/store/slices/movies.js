import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesAction = createAsyncThunk("movies/getAll" , async()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?",{params: {
        api_key: "04b2c0ab702b8e25b551aaab1c1a7d0b",
}},)
    return res.data.results;
})

const moviesSlice = createSlice({
    name:"movies",
    initialState: {movies:[]},
    extraReducers:(builder)=>{
        builder.addCase(moviesAction.fulfilled , (state, action)=>{
            state.movies = action.payload
        })
    }
})

export default moviesSlice.reducer