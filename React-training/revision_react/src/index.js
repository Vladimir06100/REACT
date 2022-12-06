import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function test() {
  console.log("test");
}

const props = {
  title: "test",
  level : 12,
  house : "Hufflepuff",
  isInDaBestHouse : true,
  friends: ["Harry", "Ron", "Hermione"],
  pet: {
    name: "Crookshanks",
    type: "cat"
  },
  sayHello: test
}

props.sayHello();