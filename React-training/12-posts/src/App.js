import './App.css';
import {useState} from "react";
import Post from './Post';

/**
 * Composant App
 * A une variable d'état qui stock la liste des posts (list)
 * Affiche la liste des posts
 * @returns 
 */
function App() {
  // Création de la variable d'état
  // useState est un hook de react, il doit donc être utilisé dans un composant
  // On crée une variable d'état, elle doit appartenir à un composant.
  const [list, setList] = useState([{title: "My rocket", content : "Look, I built a new rocket", author: "Elon Mask", likes: 0}])

  /**
   * Ajout d'un like
   * @param {Number} index : l'index dans le tableau list, pour pouvoir modifier le bon objet dans mon tableau list.
   * Je donne un index pour savoir quel élément je dois modifier
   */
  function addLike(index) {
    list[index].likes = list[index].likes + 1 ; // Mise à jour de la variable d'état avec sa nouvelle valeur
    setList([...list]); // Pour que la mise à jour soit prise en compte, j'utilise la fonction de mise à jour
  }

  /**
   * Ajoute 100 likes
   * @param {Number} index : l'index dans le tableau list, pour pouvoir modifier le bon objet dans mon tableau list.
   * Je donne un index pour savoir quel élément je dois modifier
   */
  function addSuperLike(index) {
    list[index].likes = list[index].likes + 100 ; // Mise à jour de la variable d'état avec sa nouvelle valeur
    setList([...list]); // Pour que la mise à jour soit prise en compte, j'utilise la fonction de mise à jour
  }

  /**
   * Remet les likes à 0
   * @param {Number} index : l'index dans le tableau list, pour pouvoir modifier le bon objet dans mon tableau list.
   * Je donne un index pour savoir quel élément je dois modifier
   */
  function supLike(index){
    console.log("Merci Roger"); // Hommage
    list[index].likes = 0; // Mise à jour de la variable d'état avec sa nouvelle valeur
    setList([...list]);// Pour que la mise à jour soit prise en compte, j'utilise la fonction de mise à jour
  }

  return (
    <div className="App">
      {/* Transformation du tableau d'objet (list) en tableau de composant */}
      {list.map((listObject, index) =>
      (<Post key={index} title={listObject.title}
      content={listObject.content}
      author={listObject.author}
      likes={listObject.likes} 
      addLike={addLike}
      addSuperLike={addSuperLike}
      supLike={supLike}
      index={index}
      /> ))}
    </div>
  );
}

export default App;
