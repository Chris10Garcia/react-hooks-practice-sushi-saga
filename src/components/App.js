import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddMoreMoney from "./AddMoreMoney";

const API = "http://localhost:3001/sushis";


function App() {

  const [sushiList, setSushiList] = useState([])
  const [page, setPage] = useState(1)
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(()=> {
    fetch(API + "?_page=" + page + "&_limit=4")
    .then(r => r.json())
    .then(data => data.length === 0 ? resetPage() : setSushiList(data))
  }, [page])


  function requestMore(){
    setPage(page=> page + 1)
  }

  function resetPage(){
    console.log("list resetted")
    setPage(1)
  }


  function addCash(cash){
    setMoney((money) => money + parseInt(cash))
  }

  async function removeSushi(id){
    await fetch(API + "/" + id,{
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({eaten : true})
    })
    .then(r => r.json())
    .then(data => {
      const updatedSushi = sushiList.map(sushi => sushi.id === data.id ? data : sushi)
      setSushiList(updatedSushi)
      setPlates([...plates, data])
    })
    
  }


  
  return (
    <div className="app">
      
      <SushiContainer setMoney={setMoney} money={money} sushiList={sushiList} requestMore={requestMore} removeSushi={removeSushi}/>
      
      <Table money={money} plates={plates}/>
      <AddMoreMoney addCash={addCash}/>
    </div>
  );
}

export default App;
