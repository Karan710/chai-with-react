import { useEffect, useState } from "react"

function App() {
  const [Count, SetCount] =  useState(18)

  const addVal=()=>{
    if(Count<20){
      SetCount(Count+1)
    }
    else{alert("Cannot exceed 20")}
  }

  const decVal=()=>{
    if(Count>0){SetCount(Count-1)}
    else(alert("Cannot be negitive"))
  }

  return (
    <>
    <h1>Chai aur code with Vite. </h1>
    <h2>Counter Value: {Count} </h2>

    <button onClick={addVal}>Add Value</button>
    <br />
    <button onClick={decVal}>Decrease Value</button>
    </>
  )
}

export default App
