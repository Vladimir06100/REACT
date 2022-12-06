
/**
 * Affichage d'un post
 * @param {String} title: le titre du post 
 * @param {String} content: le contenu du post 
 * @param {String} author: l'auteur du post 
 * @param {Number} likes: le nombre de likes du post
 * @param {Number} index: L'index dans mon tableau (list) qui est une variable d'état dans App
 * @param {Function} addLike: Fonction pour ajouter un like
 * @param {Function} addSuperLike: Fonction pour ajouter 100 likes
 * @param {Function} supLike: Fonction pour réinitialiser les likes à 0
 * @returns 
 */
function Post({title, content, author, likes, index, addLike, addSuperLike, supLike  }) {
    /**
     * Click sur Like
     */
    function handleClick () {
        addLike(index); // Cette fonction nous vient des propriétés du composant
    }   
    /**
     * Click sur Super Like
     */
    function handleSuperClick() {
        addSuperLike(index) // Cette fonction nous vient des propriétés du composant
    }
    /**
     * Click sur Like de Roger
     */
    function handleClickRoger() {
        supLike(index) // Cette fonction nous vient des propriétés du composant
    }

    // Affichage du post
    return(
        <div>
            <p>title :{title}</p>
            <p>content :{content}</p>
            <p>author :{author}</p>
            <p>likes :{likes}</p>
            <button onClick={handleClick}>Like</button>
            <button onClick={handleSuperClick}>Super Like</button>
            <button onClick={handleClickRoger}>Like de Roger</button>
        </div>
    )
}
export default Post;