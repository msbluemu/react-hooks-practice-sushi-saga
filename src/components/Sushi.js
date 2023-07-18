import React, {useState} from "react";

function Sushi({sushi,isEaten, onSushiClick}) {
  const {id, name, img_url, price} = sushi;


  return (
    <div className="sushi">
      <div className="plate" onClick={() => onSushiClick(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;