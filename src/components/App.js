import React, { Component, useState } from "react";
import "../styles/App.css";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [relation, setrelation] = useState("");
  function clickHandeler(e) {
    // e.preventDefeault();
    let ans = false;
    for (let i = 0; i < value1.length; i++) {
      for (let j = 0; j < value2.length; j++) {
        if (value1[i] === value2[j]) {
          ans = true;
        }
      }
    }
    if (ans === true) {
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
      if (value1.length === 0 || value2.length === 0) {
        setrelation("Please Enter valid input");
      }
    } else {
      let lengt = value1.length + value2.length;
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
      if (value1.length === 0 || value2.length === 0) {
        setrelation("Please Enter valid input");
      }
    }
  }
  return (
    <div id="main">
      <input
        type="text"
        placeholder="enter first name "
        data-testid="input1"
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter second name"
        data-testid="input2"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.value);
        }}
      />
      <button onClick={clickHandeler} data-testid="calculate_relationship">
        Calculation RelationShip Future
      </button>
      <h3 data-testid="answer">{relation}</h3>
      <button
        data-testid="clear"
        onClick={() => {
          // setrelation("");
          setValue2("");
          setValue1("");
        }}
      >
        {" "}
        Clear
      </button>
    </div>
  );
}

export default App;
