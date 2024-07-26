
import { useState } from 'react';
import './App.css';

function App() {

  let [count,setcount]= useState(0);
const incremnt=()=>{

  setcount(count+1);
}
const decremnt=()=>{
  setcount(count-1);
}
const resert=()=>{
  setcount(0);
}

  return (
    <div className="App">
     
     <h1>incremnt {count}</h1>
     <button onClick={incremnt}>incremnt</button>
     <br></br>
     <button onClick={decremnt}>decremnt</button>
     <br></br>
     <button onClick={resert}>resert</button>
    </div>
  );
}

export default App;
