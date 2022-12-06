import GameComponent from "../GameComponent/GameComponent";
import "./GamesList.css";

function GamesList() {
    const myGames = [
        { name: "fifa", price: "19.99", stock: 12 },
        { name: "the witcher", price: "18.99", stock: 15 },
    ];

  return (
    <div id="games_list">
      <h2>Ici sera la liste des jeux</h2>
      <ul>
        {
            myGames.map(
              (gameObj, index) => (
                <GameComponent key={index} name={gameObj.name} price={gameObj.price} stock={gameObj.stock} />
              )
            )
        }
      </ul>
    </div>
  );
}

export default GamesList;
