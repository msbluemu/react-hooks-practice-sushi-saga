import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
const[sushis, setSushis] = useState([]);
const [eatenSushi, setEatenSushi] = useState([]);
const [remainingBudget, setRemainingBudget] = useState(100);

function handleSushiClick(sushi) {
  if (!eatenSushi.includes(sushi) && sushi.price <= remainingBudget) {
    setEatenSushi([...eatenSushi, sushi]);
    setRemainingBudget((prevBudget) => prevBudget - sushi.price);
  }
}

useEffect(() => {
  fetch(API)
   .then((r)=> r.json())
   .then((sushi) => setSushis(sushi));
}, []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatenSushi={eatenSushi} onSushiClick={handleSushiClick}/>
      <Table plates={eatenSushi} remainingBudget={remainingBudget} />
    </div>
  );
}

export default App;
