import Comments from './Comments'
import imageamy from '../Assets/avatars/image-amyrobson.png'
import imagejulius from '../Assets/avatars/image-juliusomo.png'
import imagemax from '../Assets/avatars/image-maxblagun.png'
import imageram from '../Assets/avatars/image-ramsesmiron.png'

// const{comment,handleSubmit} = useContext(ChartContext) 
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
   
    
    const[repyId,setReplyId] = useState(null)
    const[currentuser, setCurrentuser] = useState('juliusomo')
    const[isEditing,setIsEditing]= useState(false)
    const[isEditable,setIsEditable] = useState(isEDitable)
    const OnEdit = ()=>{
        setText(word)
        setIsEditing(true)
        console.log(text)
    }

    const OnReply = ()=>{
        setReply(prev=>!prev)
        setText(`@${name}, `)

    }
    //  {reply && <Input text = {text} setText = {setText}  handleEdit={handleEdit} handleReply={handleReply} id={id}/>  }
    //   <div className=''>
    //         <div className='btn-container'>
           
    //         </div>
    //         <div className='left-side'>
                
    //             {/* <p>word}</p>
    //             {isEditing&& <button>update</button>} */}
    //         </div> 
    //     </div> 
          

    // const handleEdit = ()=>{
    //     setComment(prevComment=>prevComment.map(comment=>{
    //         if(comment.id === ID){
    //             return {...comment,word:text};    
    //         }
    //        return comment
    //     } 
    //     ))
    //     setIsEditing(false)
    //     console.log(comment)

    // }

    // const handleSubmitReply = (ID)=>{
    //     const newReply = {id: new Date().getTime().toString(),word:text}
    //     setComment([...comment, newReply])
    //     console.log(comment)
    //     setReplyId(ID)
    //     setReply(false)
    
    // const{handleEdit,edit} = useContext(ChartContext)
  
{/* <div className={`input-section ${edit? 'Edit':''}`}>
      {edit? '': <img src={imagejulius} alt='input-img'/> }
      
      <input 
      type= 'text'
      placeholder='Add a comment' 
      value={text}
      onChange = {(e)=>setText(e.target.value)}

      />
       {edit?<button onClick={handleReply} className='btn update-btn' >Update</button>: <button  onClick={()=>handleEdit(id)} className='btn' >REPLY</button> }
      
      

    </div> */}


const Comment = () => {
  
   
  
  

  return (
    <>
      {comment.map((item)=>{
          const{id} = item
          return(
            <Comments key={id}   {...item}  comment = {comment} setComment= {setComment}/>  
          )
        })}
    </>
    
  )
}

 {isEditable?<div>
                    <button>
                        <img src={deleteicon} alt="delete" />
                        <p>Delete</p>
                    </button>
                    <button onClick={OnEdit}>
                        <img src={editicon} alt="delete" />
                        <p>Edit</p>
                    </button>
                    </div>: