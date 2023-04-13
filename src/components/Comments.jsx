import React from 'react'
import Data from '../Assets/data.json'
import { useState } from 'react'
import Input from './Input'
import Comment from './Comment'



const Comments = () => {
    const[comments,setComments] = useState(Data.comments)
    const[text,setText] = useState('')
    const[reply,setReply] = useState(false)
    const[edit,setEdit] = useState(false)
    const switchReply = ()=>setReply(true)
    
    const handleReply = (id)=>{
        const updatedComment =[...comments]
        const commentIndex = comments.findIndex(i=>i===id)
         const newreply = {id:new Date().getTime().toString(), content:text}
         updatedComment[commentIndex].replies.push(newreply);
         setComments(updatedComment)
         setReply(false)
         setText('')
        console.log(comments)
    }
    const handleDelete = (id)=>{
        comments.filter(item => item.id !== id)
    }
    const OnEdit =(id)=>{
        setEdit(true)
        const EditedComment = comments.find(i=>i.id===id) 
        setText(EditedComment.content)
    }
    const handleEdit= (id)=>{
        if(text && edit){
            setComments(
                comments.map(item=>{
                if(item.id===id){
                    return{...item,content:text}
                }
                return item
       })    
            )
        }
        setEdit(false)
       console.log(comments)
    }  
  return (
    <section>
        {
            comments.map((data,i)=>{
                return(
                    <Comment key={data.id} data={data} reply={reply} switchReply={switchReply} handleReply={handleReply} text={text} setText={setText}/>
                )
            })
        } 
        <Input text={text} setText={setText} btnText={'Send'}  /> 
    </section>
          
  )
}

export default Comments