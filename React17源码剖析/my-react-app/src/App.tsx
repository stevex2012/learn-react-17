import React, { useState, useEffect, createContext } from 'react'
import logo from './logo.svg'
import './App.css'
import {ThemeContext} from './main'
import Hello from './components/Hello'
const ColorCtx = createContext('blue')

function App() {
  const [val, setVal] = useState('red')
  useEffect(() =>{

    setTimeout(() =>{
      setVal('666')
    }, 3000)
    setVal('656')
  }, [])
  return (
    <div className="App">
      {val}
      <ColorCtx.Provider value={val}>
        <Hello />
      </ColorCtx.Provider>
      {/* <ThemeContext.Consumer>
  {value => <h1>{value}</h1>}
      </ThemeContext.Consumer> */}
    </div>
  )
  }

export default App

export {
  ColorCtx
}
