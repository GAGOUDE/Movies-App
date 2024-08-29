import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFav } from '../Redux/favoriteSlice';

const CardPageFavoris = ({ moviesFav }) => {

    const dispatch = useDispatch();

    //====== Supprimer un film de la liste des favoris
    const deleteFavorite = (id) => {
        dispatch(deleteFav(id)); // Utiliser l'ID du film pour la suppression
    }

    return (
        <>
            {
                moviesFav.map((movie, i) => (
                    <div className='card' key={i}>
                        {/* Image */}
                        <img
                            src={
                                movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"
                            }
                            alt={movie.title}
                            style={{ height: '70%', objectFit: 'fill' }}
                        />
                        {/* Titre */}
                        <div style={{ marginTop: 10 }}>
                            <h2>{movie.title}</h2>
                        </div>

                        {/* Boutons Supprimer */}
                        <div
                            className="btn"
                            onClick={() => deleteFavorite(movie.id)} // Passer l'ID du film pour la suppression
                        >
                            Supprimer de liste des favoris
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default CardPageFavoris;
