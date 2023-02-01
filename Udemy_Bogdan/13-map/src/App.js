import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  'Click me',
  'Click me please',
  'Click me',
  'press me'

];

function App() {
  console.log('App rendered');
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} text={texts[0]} />
      <Button onClick={incrementCount} text="Click me please" />
      <Button onClick={incrementCount} text="Click me" />
      <Button onClick={incrementCount} text="press me" />
    </div>
  );
}

export default App;