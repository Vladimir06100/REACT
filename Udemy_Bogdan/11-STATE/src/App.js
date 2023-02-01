import './App.css';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={1000} />
      <RandomNumber maxNum={500} />
      <RandomNumber maxNum={50} />
    </div>
  );
}

export default App;