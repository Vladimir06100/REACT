/* Imports */
import { useEffect, useState } from "react";
import Post from "../components/Post";

/**
 * Composant Home
 * Page d'accueil
 */
function Home() {
  /* Variables d'état */
  const [posts, setPosts] = useState([]); // Liste des posts

  /* Effets de bord */
  // Premier rendu
  useEffect(function () {
    getPosts();
  }, []);

  /* Fonctions */
  // Récupération de la liste des posts depuis l'API web
  async function getPosts() {
    const options = {
      method: "GET",
    };

    const response = await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/clash-book/posts",
      options
    );

    const data = await response.json();

    setPosts(data.posts);
  }

  function deleteAllPosts() {
    setPosts([]);
  }

  /* Préparation du rendu */
  // Création du tableau de JSX pour à partir de la liste de posts
  const postsList = posts.map(function (element) {
    // Equivalent sans syntaxe JSX (JS Vanilla)
    // return Post({
    //   titre: element.title,
    //   contenu: element.content,
    //   prenom: element.firstname,
    //   nom: element.lastname,
    //   date: element.date,
    //   sabotage: deleteAllPosts,
    // });

    return (
      <Post
        titre={element.title}
        contenu={element.content}
        prenom={element.firstname}
        nom={element.lastname}
        date={element.date}
        sabotage={deleteAllPosts}
      />
    );
  });

  /* Rendu */
  return (
    <div className="home">
      <h1>Mon réseau social</h1>
      <p>Lorem ipsum</p>

      <h2>Les posts:</h2>
      {postsList}
    </div>
  );
}

export default Home;
