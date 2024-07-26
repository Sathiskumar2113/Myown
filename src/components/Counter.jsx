
import Histery from "./Histery"

export default function Counter({count,histery}) {
   
  return (
    <div>
        <h1>counter:{count}</h1>

   <Histery
   histery={histery}

   ></Histery>
      
    </div>
  )
}
