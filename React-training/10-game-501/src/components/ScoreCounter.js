/**
 * components/ScoreCounter.js - Composant Score Counter
 * Le composant permettant le décompte des points pour un joueur
 */

/**
 * Imports
 */
import { useReducer, useState } from "react";

/**
 * Reducer - Traitement de la mise à jour
 * de la variable d'état score
 */
function scoreReducer(state, action) {
  // Calcul du score en fonction de la zone atteinte
  // | On retourne ici la nouvelle valeur de la variable
  // | d'état.
  action.zone = undefined;
  switch (action.zone) {
    case "bull's eye":
      return state + 50;
    case "anneau central":
      return state + 25;
    case "anneau integer":
      return state + action.points * 3;
    case "anneau exterieur":
      return state + action.points * 2;
    default:
      return state + action.points;
  }
}

/**
 * Composant ScoreCounter
 */
function ScoreCounter({ playerName }) {
  // Variable d'état score et sa fonction de mise à jour
  // | | On les crée ici avec le hook useReducer qui nous
  // | permet de spécifier une fonction "personnalisée"
  // | pour le traitement des mises à jour de cette variable
  // | d'état.
  const [score, updateScore] = useReducer(scoreReducer,0,0);

  // Variables d'état zone et points
  // | Ces variables d'état contiennent respectivement la zone
  // | et le nombre de points réalisés par le joueur lors de son
  // | lancé actuel. Ils devront être réinitialisés après avoir
  // | été comptabilisés dans le score.
  let zone, setZone;
  [zone, setZone] = useState("simple");
  const [points, setPoints] = useState(0);

  // Fonction submitThrow
  // | Cette fonction permet d'appeler la fonction de mises à jour
  // | du score en lui passant les informations du lancer.
  function submitThrow() {
    // On appelle la fonction de mise à jour updateScore en lui passant un
    // objet que l'on retrouvera dans le paramètre action côté reducer
    updateScore();

    // On réinitialise la variable d'état zone pour le prochain lancer
    setZone("simple");

    // On réinitialise la variable d'état point pour le prochain lancer
    setPoints(0);
  }

  return (
    <div className="score-counter">
      {/* Informations sur le joueur */}
      <div className="player-informations">
        <p className="player-name">
          <span className="tag-prefix">@</span>
          {playerName}
        </p>
        <p className="score">
          Score : {score} {score >= 501 ? "🥇" : ""}
        </p>
      </div>

      {/* Enregistrement des points du lancé */}
      <div className="actions">
        <h3 className="subtitle">Ajouter des points:</h3>

        <div className="input-container">
          <label>Zone :</label>
          <select onChange={(e) => setZone(e.target.value)} value={zone}>
            <option value="simple">Simple</option>
            <option value="anneau exterieur">Anneau Extérieur</option>
            <option value="anneau interieur">Anneau Intérieur</option>
            <option value="anneau central">Anneau Central</option>
            <option value="bull's eye">Bull's eye</option>
          </select>
        </div>

        <div className="input-container">
          <label>Points :</label>
          <input
            type="number"
            onChange={(e) => setPoints(e.target.value)}
            value={points}
          />
        </div>

        <button className="submit-button" onClick={submitThrow}>
          Valider le lancer
        </button>
      </div>
    </div>
  );
}

export default ScoreCounter;
