import { createSlice } from "@reduxjs/toolkit";

// Charger l'état initial des favoris depuis localStorage
const initialState = {
    movies: JSON.parse(localStorage.getItem('favorites')) || [], // Utiliser les favoris stockés ou un tableau vide
    counter: JSON.parse(localStorage.getItem('favorites'))?.length || 0, // Définir le compteur en fonction de la longueur de la liste des favoris ou 0
};

// Création du slice
export const favoriteSlice = createSlice({
    name: "favoris",
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const movie = action.payload;
            const existingMovie = state.movies.find(m => m.id === movie.id); // Utiliser l'ID du film pour vérifier
            if (existingMovie) {
                return state;
            }
            state.movies.push(movie);
            state.counter++;

            // Mettre à jour localStorage
            localStorage.setItem('favorites', JSON.stringify(state.movies));
        },
        deleteFav: (state, action) => {
            const movieId = action.payload;
            state.movies = state.movies.filter((movie) => movie.id !== movieId); // Utiliser l'ID du film pour la suppression
            state.counter--;

            // Mettre à jour localStorage
            localStorage.setItem('favorites', JSON.stringify(state.movies));
        },
    }
});

export const { addToFav, deleteFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
