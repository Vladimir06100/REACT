import { useState } from "react";
import "./MovieView.css";

/**
 * Affiche un film
 */
function MovieView(props) {

  const [number1, setTom] = useState(0);

  /**
   * Rajouter un like au dossir
   */
  const click = () => { setTom(number1 + 1) }

  return (
    <li>
      <p>Titre du films...111  salut toi: {props.name}</p>
      <p>Description du film : {props.description}</p>
      <img alt="img" src={props.image} />
      <button className="like" onClick={click}>Like</button>
      <p>Actuellement, le film a {number1} like</p>
    </li>
  );
}

export default MovieView;
