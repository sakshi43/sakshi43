
import React ,{useEffect,useState}from 'react'

const Useeffect = () => {
    const [counter,setcounter]=useState(0);
    
     useEffect(()=>{
         console.log("hello");
     });
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setcounter(counter+1)}>Update counter..!</button>
    </div>
  )
}

export default Useeffect
