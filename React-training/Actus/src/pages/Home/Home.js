import Menu from "../../components/Menu/Menu";
import "./Home.css";
import { useEffect, useState } from "react";
import Article from "../../components/Article/Article";

/**
 * Composant qui affiche la page d'accueil
 * Le composant doit récupérer une liste d'articles depuis un serveur (getArticles)
 * Ensuite, il doit afficher cette liste d'article
 * @returns
 */
function Home() {
	// Création d'une variable d'état qui contient la liste des articles
	const [articles, setArticles] = useState([]);

	/**
	 * Fonction me permettant de récupérer les articles
	 */
	async function getArticles() {
		// Fetch est une fonction asynchrone, qui retourne une promesse
		// Pour obtenir le résultat, je dois attendre que la fonction se termine (avec await)
		const response = await fetch(
			"https://newsapi.org/v2/everything?q=bitcoin&apiKey=a56cd52e9f4444d7908fc2ecf423af79&pageSize=20"
		);

		// La fonction json de response est asynchrone, j'attend qu'elle se termine pour récupérer les données (avec await)
		let responseData = await response.json();

		const articles = responseData.articles;
		console.log(articles);

		setArticles(articles);
	}

	// useEffect est une fonction qui se lance au moment de la création du composant et à chaque mise à jour
	// Le premier paramètre est la fonction qui se lancera
	// Le deuxième paramètre est une liste des dépendances. Ca veut dire que quand une variable de ce tableau est modifié, on relance la fonction
	useEffect(() => {
		console.log("Je suis dans useEffect");

		// Je récupère les articles, c'est une fonction asynchrone
		// Pour ne pas bloquer le code, je n'utilise pas await
		getArticles();
	}, []);

	return (
		<div>
			<Menu />
			<div id="home">
				<h1>Bienvenue sur Bocal Actus</h1>
				<h2>
					Nous sommes un groupe d’étudiants qui créons une application
					révolutionnaire.
				</h2>
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

export default Home;
