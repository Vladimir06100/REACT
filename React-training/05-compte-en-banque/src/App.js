import { useReducer } from "react";
import CompteEnBanque from "./components/CompteEnBanque/CompteEnBanque";

let action = {
  action: "update-state",
  payload: 2000
}

/**
 * Gère la modification du state
 * @param {number} state 
 * @param {Object} action 
 * @returns {number} : la nouvelle valeur du state
 */
function soldeReducer(state, action){
  if(action.type === "update-state"){
    return action.payload
  } else{
    throw new Error();
  }
}

function App() {

  const [solde, setSolde] = useReducer(soldeReducer, 2500);

  /**
   * Gère le changement de l'input
   */
  const handleInputChange = (e) =>{
    setSolde({
      type: "update-state",
      payload: e.target.value
    });
  }

  return (
    <div className="App">
      <h1>Le compte en banque</h1>

      <label>Votre solde</label>
      <input onChange={handleInputChange} type="number" value={solde} />

      <CompteEnBanque solde={solde} monthlySpend={300} titulaire="Nicolas" soldeHistory={[500, 1400, 2000000, 4000, 5000]} />
    </div>
  );
}

export default App;
