import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css' 

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyClicked, setCopyClicked] = useState("Copy")
  
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass +=  str.charAt(char)
    }
    setPassword(pass)
    setCopyClicked("Copy")
    

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(passwordGenerator, [length, numAllowed, charAllowed, passwordGenerator])

  const copyPasstoClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopyClicked("Copied")
  }, [password])

 
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-3 my-8 bg-gray-700 text-orange-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} placeholder='password'
          ref={passwordRef}
          className='outline-none w-full py-1 px-3' readOnly />
          <button className=' bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasstoClipboard} >{copyClicked}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} />
            <label >Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input type="checkbox" defaultChecked={numAllowed}
             id="numberInput"
             onChange={()=>{setNumAllowed((prev)=>!prev)}} /> 
             <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input type="checkbox" defaultChecked={charAllowed}
             id="charInput"
             onChange={()=>{setCharAllowed((prev)=>!prev)}} /> 
             <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
