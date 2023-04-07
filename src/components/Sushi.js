import React from "react";

function Sushi({sushi, removeSushi}) {
  const {name, img_url, price, id} = sushi

  function handleOnClickRemoveImg(){
    removeSushi(id)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClickRemoveImg}>
        {/* Tell me if this sushi has been eaten! */}
        {!img_url ? null : (
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
