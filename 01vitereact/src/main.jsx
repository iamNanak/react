import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 

function MyApp(){
  return(
      <div>
        {/* <h1>Custom App | using MyApp()</h1> */}
        <h1>Custom App</h1>
      </div> 
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const username = "Nanak"

const ReactElement = React.createElement(
  'a', 
  {href: 'https://google.com', target: "_blank"},
  'click me to visit google',
  username

)
  


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />

    // <ReactElement />   // this not work as this.

    // anotherElement
    ReactElement

    // <App />
  
)
