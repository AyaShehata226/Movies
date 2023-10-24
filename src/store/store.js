import { configureStore } from "@reduxjs/toolkit";
import favReducer from './slices/fav'
import moviesReducer from './slices/movies'

export  const store = configureStore({
    reducer:{
        fav:favReducer,
        movies:moviesReducer,
    }
})