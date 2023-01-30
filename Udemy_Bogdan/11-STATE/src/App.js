import './App.css';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={1000}/>
    </div>
  );
}

export default App;