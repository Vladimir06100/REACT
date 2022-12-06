import CompteEnBanque from "./CompteEnBanque";


import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Le compte en banque</h1>
			<CompteEnBanque
				solde={2500}
				monthlySpend={300}
				titulaire="Vladimir"
				soldeHistory={[500, 1400, 2000000, 4000, 5000]}
			/>
		</div>
	);
}



export default App;
