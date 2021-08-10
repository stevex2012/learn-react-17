import React, { FC, useEffect } from 'react'
import { ColorCtx } from '../../App'

 const Hello : FC = () => {
  useEffect(() =>{
    console.log('23424234')
  }, [])
  return (
    <div>
      <ColorCtx.Consumer>
        {val => <h2>{val}</h2>}
      </ColorCtx.Consumer>
    </div>
  )
}
export default Hello