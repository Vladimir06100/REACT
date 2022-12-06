import "./Compteur.css";
import { useReducer } from "react";

// Affichage
// Détermine ce qui sera modifié sur la page
// Je créer mon état initial dans une variable
// Je créer la variable d'état avec useReducer
// J'écoute les évènements

// La valeur initialState de ma variable d'état "state", je choisi un objet pour stocker plusieurs informations
// C'est un objet javascript
const initialState = {
	playerActualScore: 0,
	actualShootPoints: 0,
	actualShootZone: "simple",
};

/**
 * Reducer function
 * @param {Object} state : l'état du composant actuel - n'est pas modifié
 * @param {Object} action: c'est un objet pour avoir à la fois accès au type de l'action et à une value
 * Si action est un object, la norme demande un attribut "type" qui représente le nom de l'action et un attribut "payload" qui correspond à des informations supplémentaires
 * @return {Object} : l'état du composant après l'action
 */
function scoreReducer(state, action) {
	if (action.type === "input-score-changed") {
		// L'utilisateur a modifié l'input score touché
		if (action.payload >= 1 && action.payload <= 20) {
			return {
				playerActualScore: state.playerActualScore, // N'a pas été modifié
				actualShootPoints: action.payload, // La nouvelle valeur de l'input
				actualShootZone: state.actualShootZone, // N'a pas été modifié
			};
		} else {
			return state; // L'état suivant sera égal à l'état actuel, aucune modification
		}
	} else if (action.type === "select-zone-changed") {
		// L'utilisateur a modifié le select "Zone touché"
		return {
			playerActualScore: state.playerActualScore, // N'a pas été modifié
			actualShootPoints: state.actualShootPoints, // N'a pas été modifié
			actualShootZone: action.payload, // La nouvelle valeur du select
		};
	} else if (action === "valider-le-coup") {
		// Pour cet exemple, action est une chaine de caractère car on a pas besoin d'informations supplémentaire
		// Pour calculer le prochain état de mon composant, toutes les valeurs dont j'ai besoin sont dans state, je n'ai donc pas besoin de valeur supplémentaire dans payload
		// Donc, action peut-être une chaine de caractère

		// On calcul le nombre de points qu'il a gagné avec le coup (pointsAjouter)
		let pointsAjouter = 0;
		if (
			state.actualShootZone === "simple" ||
			state.actualShootZone === "anneau-exterieur" ||
			state.actualShootZone === "anneau-interieur"
		) {
			let multiplier = 1;
			if (state.actualShootZone === "anneau-exterieur") multiplier = 2; // Anneau extérieur, son score sera multiplié par 2
			if (state.actualShootZone === "anneau-interieur") multiplier = 3; // Anneau intérieur, son score sera multiplié par 3

			pointsAjouter = state.actualShootPoints * multiplier;
		} else {
			if (state.actualShootZone === "anneau-central") pointsAjouter = 25;
			if (state.actualShootZone === "bull-eye") pointsAjouter = 50;
		}

		let prochainScore = state.playerActualScore + pointsAjouter;
		if (prochainScore > 501) {
			return {
				playerActualScore: state.playerActualScore,
				actualShootPoints: 0,
				actualShootZone: "simple",
			};
		} else {
			return {
				playerActualScore: prochainScore,
				actualShootPoints: 0,
				actualShootZone: "simple",
			};
		}
	} else {
		throw new Error();
	}
}

function Compteur({ firstName }) {
	// useReducer renvoie un tableau avec deux éléments
	// Le premier élément est ma variable d'état, je décide ici de l'appeler state
	// Le deuxième élément est le fonction qui permet de mettre à jour ma variable d'état, je décide de l'appeler setState
	// Le premier argument de useReducer est une fonction reducer
	// Le deuxième argument de useReducer est la valeur initial de la variable d'état. Ici, sa valeur initiale est la variable initialState créer plus haut.*
	// state = initialState (à la création du composant)
	const [state, setState] = useReducer(scoreReducer, initialState);

	/**
	 * Quand le formulaire est envoyé (l'input submit a été click)
	 * Je met à jour ma variable d'état, j'utilise donc la fonction setState
	 * @param {Objet} e
	 */
	const handleFormSubmit = (e) => {
		e.preventDefault(); // J'annule le comportement par défaut du formulaire, qui recharge la page

		setState("valider-le-coup"); // Je donne en paramètre l'action
	};

	/**
	 * Quand l'utilisateur modifie l'input "Score touché", cette fonction "handleInputScoreChanged" est déclenché
	 * Cette fonction doit mettre à jour l'état du composant
	 * J'appel donc ma fonction de mise à jour (setState), je lui donne en paramètre l'action effectué sous forme d'un objet
	 * @param {Object} e: l'évènement de l'input
	 */
	const handleInputScoreChanged = (e) => {
		// Accès à la nouvelle valeur de l'input
		// J'accède à mon paramètre e, puis à l'input avec e.target, puis à sa valeur avec e.target.value
		// La valeur de l'input est une chaine de caractère, je la transforme en nombre entier avec parseInt
		const inputValue = parseInt(e.target.value);

		setState({
			type: "input-score-changed",
			payload: inputValue, // Payload est une information supplémentaire envoyer à la fonction reducer
		});
	};

	/**
	 * Quand l'utilisateur modifie le select "Zone touché", cette fonction "handleSelectZoneChanged" est déclenché
	 * Cette fonction doit mettre à jour l'état du composant
	 * J'appel donc ma fonction de mise à jour (setState), je lui donne en paramètre l'action effectué sous forme d'un objet
	 * @param {Object} e: l'évènement de l'input
	 */
	const handleSelectZoneChanged = (e) => {
		const selectValue = e.target.value;

		setState({
			type: "select-zone-changed",
			payload: selectValue,
		});
	};

	return (
		<div id="compteur">
			{/* Si l'utilisateur a 501 points, j'affiche un message de succès */}
			{/* Condition && Affichage */}
			{state.playerActualScore === 501 && <p>Tu as gagné !</p>}

			{/* Ici, j'utilise le state */}
			<p>Score actuel : {state.playerActualScore}</p>
			{/* J'utilise ma variable firstName qui me vient des props */}
			<p>Prénom: {firstName}</p>
			<form onSubmit={handleFormSubmit}>
				<label>Score Touché</label>
				{/* Ici, j'utilise le state */}
				{/* Quand l'utilisateur modifie l'input "Score touche", je dois mettre à jour ma variable d'état */}
				<input
					onChange={handleInputScoreChanged}
					max="20"
					type="number"
					value={state.actualShootPoints}
				/>
				<br />
				<label>Zone touché</label>
				{/* Ici, j'utilise le state */}
				<select
					onChange={handleSelectZoneChanged}
					value={state.actualShootZone}>
					<option value="simple">Simple</option>
					<option value="anneau-exterieur">Anneau extérieur</option>
					<option value="anneau-interieur">Anneau intérieur</option>
					<option value="anneau-central">Anneau central</option>
					<option value="bull-eye">Bull's eye</option>
				</select>
				<br />
				{/* Je n'écoute pas le click sur cette input, mais le submit du formulaire car c'est un input submit */}
				<input type="submit" value="Valider le coup" />
			</form>
		</div>
	);
}

export default Compteur;
