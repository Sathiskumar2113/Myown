
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  let [count,setcount]= useState(0);
  let[histery,setHistery]=useState([]);

  useEffect(()=>{

    console.log(histery);
  },[histery]);
  
const incremnt=()=>{

  setcount(count+1);
  setHistery([...histery, 'I']);
}

const decremnt=()=>{
  setcount(count-1);
  setHistery([...histery, 'D']);

}
const resert=()=>{
  setcount(0);
  setHistery([...histery, 'R']);
}


  return (
    <div className="App">
     
     <Counter
     count={count}
     histery={histery}
    
     ></Counter >


     <button onClick={incremnt}>incremnt</button>
     <button onClick={decremnt}>decremnt</button>
     <button onClick={resert}>Resert</button>
     
    </div>
  );
}

export default App;
