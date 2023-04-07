import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=> {
    fetch(API + "?_page=" + page + "&_limit=4")
    .then(r => r.json())
    .then(data => data.length === 0 ? resetPage() : setSushiList(data))
  }, [page])

  function resetPage(){
    console.log("list resetted")
    setPage(1)
  }

  function removeSushi(id){
    console.log(id)
  }

  function requestMore(){
      setPage(page=> page + 1)
  }
  
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} requestMore={requestMore} removeSushi={removeSushi}/>
      <Table />
    </div>
  );
}

export default App;
