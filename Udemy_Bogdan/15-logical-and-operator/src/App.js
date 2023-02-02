import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  console.log('App rendered');
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && (
        <div>
          {/* const btnStyle = {background: 'lightgreen'} */}
          <button
            style={{ backgroundColor: 'lightgreen' }}
            onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
