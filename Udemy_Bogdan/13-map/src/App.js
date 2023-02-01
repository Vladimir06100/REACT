import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  'Click me',
  'Click me please',
  'Click me',
  'Press me',
  'Salut',
  'Press me again',
];

function App() {
  console.log('App rendered');
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text) => {
        return (
          <Button
            onClick={incrementCount}
            text={text}
          />
        );
      })}
    </div>
  );
}

export default App;
