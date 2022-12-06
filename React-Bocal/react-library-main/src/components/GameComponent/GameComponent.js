import "./GameComponent.css";
import { useState } from 'react';

/**
 * Affiche un jeu
 */
function GameComponent(props){

    // Combien l'utilisateur a acheter de ce jeu
    const [userBuyQuantity, setBuyQuantity] = useState(0);

    const handleBuyClick = () => { 
        if(true){
            setBuyQuantity(userBuyQuantity + 1) 
        }        
    }

    const handleRemoveClick = () => { 
        if(userBuyQuantity > 0){
            setBuyQuantity(userBuyQuantity - 1)
        }
    }

    return(
        <li className="game_component">
            <h3>Nom du jeu: {props.name}</h3>
            <p>Prix: {props.price} €</p>
            <p>{props.stock - userBuyQuantity} en stock</p>
            <p>Vous avez acheter {userBuyQuantity} jeux</p>
            <button onClick={handleBuyClick}>Acheter le jeu</button>
            <br />
            { (userBuyQuantity > 0) && <button onClick={handleRemoveClick}>Retirer un jeu</button>}
        </li>
    )
}

export default GameComponent;