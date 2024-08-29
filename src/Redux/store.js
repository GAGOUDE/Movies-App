import { configureStore } from "@reduxjs/toolkit";
import favorisReducer from "./favoriteSlice";
import queryReducer from "./querySlice";

export const store = configureStore({
    reducer: {
        favoris: favorisReducer,
        query: queryReducer
    },
});