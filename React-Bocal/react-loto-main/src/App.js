import { useState } from "react";
import "./App.css";
import NombreTire from "./components/NombreTire/NombreTire";

function App() {
  const [tirages, setTirages] = useState(0);
  const [historiqueTirage, setHistoriqueTirage] = useState([]);

  const handleClick = () => {
    // Je choisi un nombre entre 1 et 90
    let number = Math.floor(Math.random() * 90);

    // Si le nombre est déjà dans le tableau historiqueTirage, on retire un nouveau nombre
    if (historiqueTirage.includes(number)) {
      number = Math.floor(Math.random() * 90);
    }

    setTirages(number);

    let nouvelHistorique = historiqueTirage;
    nouvelHistorique.push(number);

    setHistoriqueTirage(nouvelHistorique);
  };

  return (
    <div className="App">
      <h1>Le Loto Academy</h1>
      <p>
        Tirage actuel: <NombreTire number={tirages} />
      </p>

      <button onClick={handleClick}>Tirer au sort</button>
      <ul>
        {historiqueTirage.map((historiqueObject) => (
          <li>
            <NombreTire number={historiqueObject} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
