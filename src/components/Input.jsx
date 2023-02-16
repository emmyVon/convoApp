import React, { useState } from 'react'
import ChartContext from '../context/ChartContext'
import { useContext } from 'react'

const Input = ({imager,Text,setText,edit}) => {
  const{reply} =  useContext(ChartContext)
    
  return (
    
    <div className={`input-section ${edit? 'input_edit':''}`}>
      <img src={imager} alt='input-img'/>
      <input 
      type= 'text'
      placeholder='Add a comment' 
      value={Text}
      onChange = {(e)=>setText(e.target.value)}

      />
      <button>{reply? 'Reply':'Send'}</button>

    </div>
  )
}

export default Input