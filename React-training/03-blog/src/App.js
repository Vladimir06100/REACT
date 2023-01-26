import "./App.css";
import Menu from "./Menu";
import ContenuPrincipale from "./Contenu";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<aside>salut</aside>
			<header className="App-header">
				<Menu />
				<ContenuPrincipale />
				<Footer />
			</header>
		</div>
	);
}

export default App;
