import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const ThemeContext = createContext('')

console.log('---ThemeContext', ThemeContext)
ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value="234">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

export {
  ThemeContext
}