import React, { useState } from 'react'


export default function Counter({handlechange}) {

    const [count ,setCount]=useState(0);

  const handleincremnt=()=>{
    setCount(count+1);
   handlechange(count +1);

  }
  return (
    <div>
      <button onClick={handleincremnt}>increment</button>
    </div>
  )
}
// child copoments