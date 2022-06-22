import React,{ useState }  from 'react'

export default function UseState() {
  const [count,setCount]=useState(0);

  const Increment=()=>{
    setCount(count+1)
  }
  const Decrement=()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>{count}</h1>
   <button onClick={Increment} style={{padding:"20px",color:"blue"}}>+</button>
   <button onClick={Decrement} style={{padding:"20px",color:"blue"}}>-</button>


    </>
  )
}
