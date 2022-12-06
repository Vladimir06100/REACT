import MovieView from "./MovieView/MovieView";
import "./MovieList.css";

/**
 * Liste des films
 */
function MovieList(props){

    const filmDetails = [
        {
            name: "Titanic",
            description: "Le Titanic dans toute sa splendeur",
            image: "https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg"
        },
        {
            name: "Titanic 2",
            description: "Le Titanic toujours dans toute sa splendeur",
            image: "https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg"
        }
    ];

    return(
        <div className="movie_list">
            <ul>
                {filmDetails.map(
                    (movieObject, index) => <MovieView 
                        key={index}
                        name={movieObject.name} 
                        description={movieObject.description}
                        image={movieObject.image} 
                    />
                )}
            </ul>
        </div>
    )
}

export default MovieList;