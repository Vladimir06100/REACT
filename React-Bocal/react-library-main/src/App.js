import "./App.css";
import DeliveryDetails from "./components/DeliveryDetails/DeliveryDetails";
import GamesList from "./components/GamesList/GamesList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <DeliveryDetails />
      <GamesList />
    </div>
  );
}

export default App;
