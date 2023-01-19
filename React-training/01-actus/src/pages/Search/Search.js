import Menu from "../../components/Menu/Menu";
import "./Search.css";
import { useEffect, useState } from "react";
import Article from "../../components/Article/Article";

/**
 * Composant qui affiche la page d'accueil
 * Le composant doit récupérer une liste d'articles depuis un serveur (getArticles)
 * Ensuite, il doit afficher cette liste d'article
 * @returns
 */
function Search() {
	// Création d'une variable d'état qui contient la liste des articles
	const [articles, setArticles] = useState([]);

	// Je crée une variable d'état userSearch, qui est égale à "" initialement
	// et la variable setUserSearch qui est une fonction pour mettre à jour userSearch
	const [userSearch, setUserSearch] = useState("");

	/**
	 * Fonction me permettant de récupérer les articles
	 */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	async function getArticles() {
		if (userSearch !== "") {
			// Fetch est une fonction asynchrone, qui retourne une promesse
			// Pour obtenir le résultat, je dois attendre que la fonction se termine (avec await)
			const response = await fetch(
				`https://newsapi.org/v2/everything?q=${userSearch}&apiKey=a56cd52e9f4444d7908fc2ecf423af79&pageSize=20`
			);
			// +GV-6j@R&ds8DgG

			// La fonction json de response est asynchrone, j'attends qu'elle se termine pour récupérer les données (avec await)
			// transformation tout les element en objet a utilisé
			let responseData = await response.json();
			responseData.articles = undefined;

			const articles = responseData.articles;

			setArticles(articles); // Je mets à jour ma variable d'état articles en appelant sa fonction de mise à jour
		}
	}

	/**
	 * Se déclenche quand l'utilisateur modifie l'input search
	 */
	const handleSearchChange = (e) => {
		const inputValue = e.target.value; // Je récupère la valeur de l'input
		setUserSearch(inputValue); // Je mets à jour la variable d'état userSearch
	};

	// useEffect est une fonction qui se lance au moment de la création du composant et à chaque mise à jour
	// Le premier paramètre est la fonction qui se lancera
	// Le deuxième paramètre est une liste des dépendances. Ça veut dire que quand une variable de ce tableau est modifié, on relance la fonction
	useEffect(() => {
		console.log("Je suis dans useEffect");

		// Je récupère les articles, c'est une fonction asynchrone
		// Pour ne pas bloquer le code, je n'utilise pas await
		getArticles().then(r =>{});
	}, [getArticles, userSearch]);

	return (
		<div>
			<Menu />
			<div id="home">
				<h1>Page de recherche</h1>
				<div>
					<label>Recherche</label>
					<input type="text" value={userSearch} onChange={handleSearchChange} />
				</div>
				<p>Liste des articles</p>
				<ul>
					{articles.map((article, index) => (
						<Article
							key={index}
							title={article.title}
							description={article.description}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Search;
