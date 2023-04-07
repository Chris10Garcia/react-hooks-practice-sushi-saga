import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushiList, requestMore, removeSushi}) {
  return (
    <div className="belt">
      {sushiList.map(sushi => {return <Sushi key={sushi.id} sushi={sushi} removeSushi={removeSushi}/>})}
      <MoreButton requestMore={requestMore}/>
    </div>
  );
}

export default SushiContainer;
