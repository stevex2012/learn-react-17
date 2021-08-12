import React, { FC, useEffect } from 'react'
import { ColorCtx } from '../../App'

 const Hello : FC = () => {
  useEffect(() =>{
    console.log('23424234', this )
   
  }, [])

  return (
    <div id="Hello">
      <span>123</span>
      <h1>h1</h1>
      <h2>h2</h2>
      {/* <ColorCtx.Consumer> */}
        {/* {val => <h2>{val}</h2>} */}
      {/* </ColorCtx.Consumer> */}
    </div>
  )
}
console.log('<Hello />', Hello.toString())

export default Hello