import './App.css';
import persons from './data/persons';

function App() {
  return (
    <div className="App">
      {persons.map((person) => { 
        return <h1>{person.firstName}</h1>
      })}
    </div>
  );
}

export default App;