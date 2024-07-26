
import React, { useState } from 'react'

import Counter from './components/Counter';

export default function App() {

  const [count ,setCount]=useState(0);
  
  const handlechange=(value)=>{
    setCount(value)
  } 
  return (
    <div>

<h1>Counter:{count}</h1>

<Counter
handlechange={handlechange}
></Counter>
      
    </div>
  )
}
// parents components