import './App.css';
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={2}/>
      <PetInfo animal="dog" age={7}/>
    </div>
  );
}

export default App;