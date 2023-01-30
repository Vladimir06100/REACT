import {useState} from "react";

function generateRandomNum() {
  return Math.floor(Math.random() * 100);
}

function RandomNumber() {
  const [randomNum, setRandomNum] = useState(generateRandomNum());
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum())
  }
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;