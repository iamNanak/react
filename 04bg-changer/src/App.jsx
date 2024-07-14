import {useState} from "react";

function App() {
  const [color, setColor] = useState("lightblue")

  return (
      <div className="w-full h-screen " style={{backgroundColor: color}}>

          <div className="fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2 m-10 rounded-3xl ">
            <div className="flex flex-wrap justify-center gap-6 shadow-lg bg-white px-2 py-3 rounded-3xl">
            <button onClick={() => {setColor('red')}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                style={{backgroundColor: 'red'}}>Red</button>

                <button onClick={() => {setColor('green')}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                style={{backgroundColor: 'Green'}}>Green</button>

                <button onClick={() => {setColor('orange')}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                style={{backgroundColor: 'orange'}}>Orange</button>

                <button onClick={() => {setColor('black')}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                style={{backgroundColor: 'black'}}>Black</button>

                <button onClick={() => {setColor('purple')}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                style={{backgroundColor: 'purple'}}>Purple</button>

                <button onClick={() => {setColor('magenta')}} className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
                style={{backgroundColor: 'Magenta'}}>Magenta</button>
                
                <button onClick={() => {setColor('lavender')}} className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
                style={{backgroundColor: 'lavender'}}>Lavender</button>
            </div>



          </div>
      </div>
  )
}

export default App
