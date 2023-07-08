import React from 'react'
import { createContext} from 'react'


const ChartContext = createContext();

export function ChartProvider({children}){
    
    // const[editID,setEditId] = useState(null)
    


    // const EditItem = (id)=>{
    //     const updateItem = comment.find((item)=> item.id === id)
    //     setText(updateItem.content)
    //     setEditId(id)
    // }
    // const DeleteComment = (id)=>{
    //   const remainitems = comment.filter((item)=>item.id !== id)
    //   setComment(remainitems)
    // }
    // const handlereply = ()=>{
    //   setreply((prev)=> !prev)
    // }

    // const handleSubmit =(e)=>{
    //   e.preventDafault()
    // }
   

  
    
  
    return (
        <ChartContext.Provider >{children}</ChartContext.Provider>
    )
}

export default ChartContext