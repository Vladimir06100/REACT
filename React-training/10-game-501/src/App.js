/**
 * App.js - Composant App
 * Le composant racine de l'application
 */

/* Imports */
import ScoreCounter from "./components/ScoreCounter";
import "./assets/style/style.css";

/* Composant App */
function App() {
  return (
    <div id="mainContainer">
      <header>
        <h1 class="main-title">🎯 Le 501</h1>
        <p class="tagline">Le jeu de fléchettes</p>
      </header>

      <section className="players-container">
        <ScoreCounter playerName="Joueur 1" />
        <ScoreCounter playerName="Joueur 2" />
      </section>
    </div>
  );
}

export default App;
