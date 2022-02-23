import React, { Component, useState } from "react";
import "../styles/App.css";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [relation, setrelation] = useState("");
  function clickHandeler(e) {
    // e.preventDefeault();
    let lengt = value1.length + value2.length - 2;
    if (lengt % 6 === 1) {
      setrelation("Friends");
    }
    if (lengt % 6 === 2) {
      setrelation("Love");
    }
    if (lengt % 6 === 3) {
      setrelation("Affection");
    }
    if (lengt % 6 === 4) {
      setrelation("Marriage");
    }
    if (lengt % 6 === 5) {
      setrelation("Enemy");
    }
    if (lengt % 6 === 0) {
      setrelation("Siblings");
    }
  }
  return (
    <div id="main">
      <input
        type="text"
        placeholder="enter first name "
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter second name"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.value);
        }}
      />
      <button onClick={clickHandeler}>Calculation RelationShip Future</button>
      <h3>{relation}</h3>
    </div>
  );
}

export default App;
