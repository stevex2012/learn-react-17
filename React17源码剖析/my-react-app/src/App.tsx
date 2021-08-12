import React, { useState, useEffect, createContext } from 'react'
import logo from './logo.svg'
import './App.css'
import {ThemeContext} from './main'
import Hello from './components/Hello'
const ColorCtx = createContext('blue')
import Title from './components/Title'
function App() {
  // const [val, setVal] = useState('red')
  // const [color, setColor] = useState('red')
  
  // useEffect(() =>{

  //   setTimeout(() =>{
  //     setVal('666')
  //   }, 3000)
  //   setVal('656')
  //   setColor('blue')
  // }, [])
  return (
    <div className="App">
      {/* {val}
      {color} */}
      {/* <ColorCtx.Provider value={val}> */}
        <Hello />
        {/* <Title />
        <h6>h6</h6> */}
      {/* </ColorCtx.Provider> */}
      {/* <ThemeContext.Consumer>
  {value => <h1>{value}</h1>}
      </ThemeContext.Consumer> */}
    </div>
  )
  }
console.log('app', App.toString())
export default App

export {
  ColorCtx
}
