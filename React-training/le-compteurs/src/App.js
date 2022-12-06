import "./App.css";
import { useReducer } from "react";

function compteurReducer(state, action) {
	if (action === "increment") {
		return state + 1;
	} else if (action === "decrement") {
		if (state > 0) {
			return state - 1;
		}
	} else if (action === "doubler") {
		if (state > 0) {
			return state * 2;
		}
	} else if (action === "puissance") {
		if (state > 0) {
			return state * state;
		}
	} else if (action === "diviserParDeux") {
		if (state > 0) {
			return state / 2;
		}
	} else if (action === "aleatoire") {
		if (state >= 0) {
			return Math.round(Math.random() * 100);
		}
	} else if (action === "reset") {
		if (state >= 0) {
			return (state = 0);
		}
	} else {
		throw new Error("recommencer");
	}
}

function App() {
	const [compteur, setCompteur] = useReducer(compteurReducer, 0);
	return (
		<div className="App">
			<h1>Salut</h1>
			<p>{compteur} compteur</p>
			<button onClick={() => setCompteur("increment")}>Incrémenter</button>
			<button onClick={() => setCompteur("decrement")}>Décrémenter</button>
			<button onClick={() => setCompteur("doubler")}>Doubler</button>
			<button onClick={() => setCompteur("puissance")}>Puissance</button>
			<button onClick={() => setCompteur("diviserParDeux")}>
				Diviser par deux
			</button>
			<button onClick={() => setCompteur("aleatoire")}>Aleatoire</button>
			<button onClick={() => setCompteur("reset")}>Reset</button>
		</div>
	);
}

export default App;
