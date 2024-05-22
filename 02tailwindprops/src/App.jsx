import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj={name:"Karan", age: 25}
  const myArr =[1, 2, 3 ]
  return (
    <>
     <h1 className="text-3xl font-bold text-pretty rounded-xl p-2 text-black bg-cyan-200 mb-1 ">Chai with React</h1>
    <Card userName = "chaiwithreact" myObj={myObj} myArr={myArr} btnText="Subscribe" ></Card>
    <Card userName = "Karan" myObj={myObj} myArr={myArr} btnText="View Profile" ></Card>
    </>
  )
}

export default App
