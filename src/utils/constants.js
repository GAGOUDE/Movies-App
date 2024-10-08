// Fonction pour formater la date
export const dateFormat = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
}

// Fonction pour trouver le genre des films
export const genreFinder = (movie) => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
        switch (movie.genre_ids[i]) {
            case 28:
                genreArray.push('Action');
                break;
            case 12:
                genreArray.push('Aventure');
                break;
            case 16:
                genreArray.push('Animation');
                break;
            case 35:
                genreArray.push('Comédie');
                break;
            case 80:
                genreArray.push('Policier');
                break;
            case 99:
                genreArray.push('Documentaire');
                break;
            case 18:
                genreArray.push('Drame');
                break;
            case 10751:
                genreArray.push('Famille');
                break;
            case 14:
                genreArray.push('Fantasy');
                break;
            case 36:
                genreArray.push('Histoire');
                break;
            case 27:
                genreArray.push('Horreur');
                break;
            case 10402:
                genreArray.push('Musique');
                break;
            case 9648:
                genreArray.push('Mystère');
                break;
            case 10749:
                genreArray.push('Romance');
                break;
            case 878:
                genreArray.push('Science-fiction');
                break;
            case 10770:
                genreArray.push('Téléfilm');
                break;
            case 53:
                genreArray.push('Thriller');
                break;
            case 10752:
                genreArray.push('Guerre');
                break;
            case 37:
                genreArray.push('Western');
                break;
            default:
                break;
        }
    }
    return genreArray.map((genre, i) => <li key={i}>{genre}</li>);
};
