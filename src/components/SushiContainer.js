import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatenSushi, onSushiClick}) {
  const [sushiIndex, setSushiIndex] = useState(0);
  const sushiBatchSize = 4;
  const displayedSushis = sushis.slice(
    sushiIndex,
    sushiIndex + sushiBatchSize
  );

  function handleMoreSushi() {
    setSushiIndex((prevIndex) => prevIndex + sushiBatchSize);
  }
  
  return (
    <div className="belt">
      {displayedSushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi}  isEaten={eatenSushi.includes(sushi)} onSushiClick={onSushiClick} />
      ))}
     {sushiIndex + sushiBatchSize < sushis.length && (
        <MoreButton onMoreSushi={handleMoreSushi} />
      )}   
    </div>
  );
}

export default SushiContainer;
