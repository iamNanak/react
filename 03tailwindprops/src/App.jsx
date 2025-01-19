import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/cards'

function App() {
  

  let myObj ={
    username:"Nanak",
    age: 12
  }

  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-orange-300 text-black p-5 rounded-xl'>Tailwind CSS | React </h1>

      <Card username="Windows" passObj={myObj} passArr={newArr} btnKey="Click Me"/>
      <Card username="Linux"/>
    </>
  )
}

export default App
