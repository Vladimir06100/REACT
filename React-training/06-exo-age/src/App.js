import './App.css';
import {useState} from 'react';
import Search from './components/Search/Search';
import History from './components/History/History';

function App() {
  // Création de la variable d'état history
  const [history, setHistory] = useState([{firstName: "bella", age: 42}]);

  /**
   * Ajout d'une valeur dans l'historique
   * @param {Object} newValue
   * @param {String} newValue.firstName
   * @param {Number} newValue.age
   */
  function addHistory(newValue) {
    history.push(newValue);
    setHistory([...history]);
  }

  return (
    <div className="App">
      <Search addHistory={addHistory}/>
      {history.map((element, index) => <History key={index} firstName={element.firstName} age={element.age}/>)}
    </div>
  );
}

export default App;
