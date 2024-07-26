
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  let [count,setcount]= useState(0);
  
const incremnt=()=>{

  setcount(count+1);
}


  return (
    <div className="App">
     
     <Counter
     count={count}
     
     
     ></Counter>
     <button onClick={incremnt}>incremnt</button>
     
    </div>
  );
}

export default App;
