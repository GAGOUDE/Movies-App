// import { useEffect } from 'react';
import Header from '../components/Header';
import CardPageFavoris from '../components/Card-Page-Favoris';
import { useSelector } from 'react-redux';


const Favoris = () => {
  // Movies from Redux
  const moviesFav = useSelector((state) => state.favoris);

  // useEffect(() => {
  // }, [moviesFav])

  return (
    <div className="home-page">
      <Header />

      <div className="title">
        <h1>Movies App</h1>
      </div>

      <div className="result">
        {moviesFav.movies.length > 0 ? (
          <CardPageFavoris moviesFav={moviesFav.movies} />
        ) : (
          <h2 style={{ color: 'black' }}>La liste des favoris <span>💖</span> est vide.</h2>
        )}
      </div>

    </div>
  );
};

export default Favoris;