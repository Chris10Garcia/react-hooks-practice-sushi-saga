import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushiList, requestMore, removeSushi, setMoney, money}) {
  return (
    <div className="belt">
      {sushiList.map(sushi => 
          {return <Sushi key={sushi.id} sushi={sushi} money = {money} setMoney={setMoney} removeSushi={removeSushi}/>})}
      <MoreButton requestMore={requestMore}/>
    </div>
  );
}

export default SushiContainer;
