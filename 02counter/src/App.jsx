import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  // let counter = 1
  function addValue(){                 
    // counter = counter + 1              // counter get updated but problem is in UI updation 
    if(counter < 20){
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    }
    console.log("clicked", counter)
  } 

  const subValue = () => {
    if(counter > 0){
      // setCounter(counter - 1)
      setCounter(prevcounter => prevcounter-1)
      setCounter(prevcounter => prevcounter-1)
      setCounter(prevcounter => prevcounter-1)
      // setCounter(prevcounter => prevcounter-1)
    }
    console.log("clicked", counter)
  }
  return (
    <>
        <h1>Hello Nanak, Its ViteReact from 02counter</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add Value</button>
        <button onClick={subValue}>Remove Value, {counter}</button>
        <p>{counter}</p>
    </>
  )
}

export default App
