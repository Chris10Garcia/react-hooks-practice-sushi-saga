import React, { useState } from "react"

function AddMoreMoney({addCash}){
    const [cash, setCash] = useState(0)
  
    function handleCash(e){
      setCash(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      addCash(cash)
    }
  
    return(
      <div>
        <h2 >Add More Money to Your Balance</h2>
        <form onSubmit = {handleSubmit}>
          <input onChange = {handleCash} type="number"></input>
          <button type="submit">Add to Balance</button>
        </form>
      </div>
    )
  }


  export default AddMoreMoney