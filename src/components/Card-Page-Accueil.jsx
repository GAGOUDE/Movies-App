import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, deleteFav } from '../Redux/favoriteSlice'; // Importer deleteFav
import ModalSynopsis from './Modal-sypnosis';
import { dateFormat, genreFinder } from '../utils/constants';

const CardPageAccueil = ({ movie }) => {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    // Récupérer les films favoris depuis le store
    const favoriteMovies = useSelector((state) => state.favoris.movies);

    // Fonction pour vérifier si le film est déjà dans les favoris
    const isFavorite = favoriteMovies.some(favMovie => favMovie.id === movie.id);

    // Ajouter un film à la liste des favoris
    const addToFavorite = () => {
        dispatch(addToFav(movie));
    }

    // Supprimer un film de la liste des favoris
    const removeFromFavorite = () => {
        dispatch(deleteFav(movie.id)); // Utilisez l'ID du film pour la suppression
    }

    return (
        <div className='card' key={movie.title}>
            {/* Image */}
            <img
                src={
                    movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"
                }
                alt={movie.title}
            />
            {/* Titre */}
            <h2>{movie.title}</h2>

            {/* Date de sortie */}
            {movie.release_date ? <h5>Date de sortie : {dateFormat(movie.release_date)}</h5> : ""}

            {/* Vote */}
            <h4> {movie.vote_average}/10 <span style={{ color: 'yellow', fontSize: '1.3rem' }} >&#9733;</span> </h4>

            {/* Genre  */}
            <ul>{movie.genre_ids ?
                genreFinder(movie) : movie.genre_ids.map((genre, index) => <li key={index}>{genre.name}</li>)}
            </ul>

            {/* Résumé */}
            {movie.overview ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: "pointer", backgroundColor: 'gray', marginBottom: 10, paddingTop: '16px' }}>
                    <h3 onClick={() => setModalShow(true)} id="sypnosis" >Sypnosis &#128072;</h3>
                </div>
                :
                <h3>Sypnosis indisponible</h3>}

            <ModalSynopsis
                show={modalShow}
                onHide={() => setModalShow(false)}
                synopsis={movie.overview}
            />

            {/* Boutons Ajouter/Supprimer */}
            <div
                className={`btn ${isFavorite ? 'btn-removeFromFavorite' : ''}`} // Ajouter une classe conditionnelle
                onClick={() => isFavorite ? removeFromFavorite() : addToFavorite()}
            >
                {isFavorite ? "Enlever de la liste des favoris" : "Ajouter aux favoris"}
            </div>
        </div>
    );
}

export default CardPageAccueil;
