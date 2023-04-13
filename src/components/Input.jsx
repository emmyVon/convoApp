import React, { useState } from 'react'
import ChartContext from '../context/ChartContext'
import { useContext } from 'react'
import imagejulius from '../Assets/avatars/image-juliusomo.png'

const Input = ({id,text,setText,btnText,handleReply}) => { 
  return (
    <div className='input-section'>
        <img src={imagejulius} alt='img'/>
        <input 
          type= 'text'
          placeholder='Add a comment' 
          value={text}
          onChange = {(e)=>setText(e.target.value)}
      />
      <button onClick={()=>handleReply(id)}>{btnText}</button>
    </div>
    
  )
}

export default Input