import React from 'react'
import Data from '../Assets/data.json'
import { useState } from 'react'
import Input from './Input'
import Comment from './Comment'



const Comments = () => {
    const[comments,setComments] = useState(Data.comments)
    const[text,setText] = useState('')   
  return (
    <section>
        {
            comments.map((data,i)=>{
                return(
                    <Comment key={data.id} comments={comments} setComments={setComments} data={data} text={text} setText={setText} />
                )
            })
        } 
        <Input text={text} setText={setText} btnText={'Send'}  /> 
    </section>
          
  )
}

export default Comments