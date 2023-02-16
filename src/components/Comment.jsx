import React from 'react'
import { useState } from 'react'
import ChartContext from '../context/ChartContext'
import { useContext } from 'react'
import Input from './Input'
import Comments from './Comments'



const Comment = ({count,image,name,active,imager }) => {
  
  const{handleEdit,handlereply,text,edit,comment} = useContext(ChartContext)

    
  //  const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   if(text){
  //      const newcomment = {id:new Date().getTime,content:text}
  //      setComment([...comment,newcomment])
  //      setText('')
  //   }

  //   else if(edit){
        

  //   }
    
  //  }
  

  return (
    <form >
      {comment.map((item,index)=>{
          const{Id} = item
          return(
            <Comments key={Id} {...item}/>  
          )
        })}
    {/* {reply && <Input Text = {text} setText = {setText} imager ={imager} edit={edit}/>
    } */}
    </form>
    
  )
}

export default Comment