import Task from "./composants/Task/Task";
/**
 * Composant App qui représente l'application
 */
function App() {
	// Deux variables d'environnements (state)

	/**
	 * L'utilisateur a cliqué sur le bouton Validation
	 * Je modifie mes deux variables d'environnements
	 */
	const addTask = () => {
		// Ajout de la tache actuelle à mon tableau
		tasksList.push(newTask);

		// Mise à jour de la variable d'environnement tasksList
		setTasksList(tasksList);

		// Mise à jour de la variable d'environnement newTask
		setNewTask("");
	};

	/**
	 * L'input a changer de valeur, je met à jour ma variable d'environnement newTask
	 */
	const inputChange = (e) => {
		setNewTask(e.target.value);
	};

	// Le return correspond à ce qui sera affiché à l'écran par mon composant App
	// map permet de transformer un tableau en un autre tableau
	// Ici, je veux transformer un tableau de chaine de caractères (string) en un tableau de composant Task
	return (
		<div className="App">
			<Task content="Mon contenu" />

			<input onChange={inputChange} value={newTask} />

			<button onClick={addTask}>Validation</button>

			<ul>
				{tasksList.map((activeTask, index) => (
					<Task content={activeTask} key={index} />
				))}
			</ul>
		</div>
	);
}

export default App;
