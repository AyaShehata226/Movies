import { Action } from "@remix-run/router"
import {createSlice} from "@reduxjs/toolkit"
const favMoviesSlice = createSlice({
    name:"faMovies",
    initialState:{movies:[]},
    reducers:{
        addToFavorites:function(state , action){
            state.movies.push(action.payload)
        },
        removeFromFavorites: (state, action) => {
            state.movies = state.movies.filter((movie) => movie.id !== action.payload);
          },
    }
})

export const {addToFavorites , removeFromFavorites} = favMoviesSlice.actions
export default favMoviesSlice.reducer