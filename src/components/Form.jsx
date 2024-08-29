import React, { useEffect, useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import CardPageAccueil from './Card-Page-Accueil';

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [query, setQuery] = useState("amour");
    const [filtreGoodToBad, setFiltreGoodToBad] = useState("goodToBad");

    useEffect(() => {
        const API_KEY = env.REACT_APP_THEMOVIEDB_API_KEY;

        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=fr-FR&page=1&include_adult=false`
                );
                setMoviesData(res.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [query]);

    // Submit form
    const onSubmit = (e) => {
        e.preventDefault();
        setQuery(query);
    };

    return (
        <div className="form-component">
            <div className="title">
                <h1>Movies App</h1>
            </div>
            <div className="form-container">
                {/* FORM SEARCH MOVIE */}
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Rechercher"
                        onClick={(e) => setQuery(query)}
                    />
                </form>

                {/* FILTRES */}
                <div className="btn-sort-container">
                    {/* Filtre Top (Décroissant) */}
                    <div
                        className={`btn-sort ${filtreGoodToBad === "goodToBad" ? "active" : ""}`}
                        id="goodToBad"
                        onClick={() => setFiltreGoodToBad("goodToBad")}
                    >
                        Top<span>&#8593;</span>
                    </div>

                    {/* Filtre Flop (Croissant) */}
                    <div
                        className={`btn-sort ${filtreGoodToBad === "badToGood" ? "active" : ""}`}
                        id="badToGood"
                        onClick={() => setFiltreGoodToBad("badToGood")}
                    >
                        Flop<span>&#8595;</span>
                    </div>
                </div>
            </div>

            {/* MOVIES DATA RESULTS */}
            <div className="result">
                {moviesData
                    .sort((a, b) => {
                        if (filtreGoodToBad === "goodToBad") {
                            return b.vote_average - a.vote_average;
                        } else if (filtreGoodToBad === "badToGood") {
                            return a.vote_average - b.vote_average;
                        }
                        return 0;
                    })
                    .map((movie, i) => (
                        <CardPageAccueil key={i} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default Form;
