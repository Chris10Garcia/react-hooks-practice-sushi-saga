import React from "react";

function Sushi({sushi, removeSushi, setMoney, money}) {
  const {name, img_url, price, eaten, id} = sushi

  function handleOnClickRemoveImg(){
    const cashLeft = money - price
    if (!eaten && cashLeft >= 0 ) {
      removeSushi(id)
      setMoney(cashLeft)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClickRemoveImg} style = {{pointerEvents : "auto"}}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
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
