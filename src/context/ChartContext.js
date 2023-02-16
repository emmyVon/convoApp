import React from 'react'
import { createContext,useState } from 'react'
import imageamy from '../Assets/avatars/image-amyrobson.png'
import imagejulius from '../Assets/avatars/image-juliusomo.png'
import imagemax from '../Assets/avatars/image-maxblagun.png'
import imageram from '../Assets/avatars/image-ramsesmiron.png'


const ChartContext = createContext();

export function ChartProvider({children}){
    const[text,setText] = useState('')
    const[editID,setEditId] = useState(null)
    const[reply,setreply] = useState(false)
    const[edit,setEdit]= useState(false)
    const[comment,setComment] = useState([
  {
    Id:1,
    name:'amyrobson',
    count:12,
    image:imageamy,
    active:`${1}  month ago`,
    word: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt amyrobon first on the list.'
  },
  {
    Id:2,
     name:'maxblagun',
     count:12,
    image:imagemax,
    active:`${1}  month ago`,
    word: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt maxblagun second on the list.'
  },
  {
    Id:3,
     name:'ransesmiron',
    image:imageram,
    count:12,
    active:`${1}  month ago`,
    word: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ransesmiron third on the list.'
  },
  {
    Id:4,
     name:'juliusomo',
     count:12,
    image:imagejulius,
    active:`${1}  month ago`,
    word: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt chat owner first on the list.'
  },
]);

    const EditItem = (id)=>{
        const updateItem = comment.find((item)=> item.id === id)
        setText(updateItem.content)
        setEditId(id)
    }
    const DeleteComment = (id)=>{
      const remainitems = comment.filter((item)=>item.id !== id)
      setComment(remainitems)
    }
    const handlereply = ()=>{
      setreply((prev)=> !prev)
    }
    const handleEdit = (id)=>{
   const Edit = comment.map((item)=>{
    if(item.Id === id){
      setEdit(true)
      setText(Edit.word)
    }
    
   })

    }

  
    
  
    return (
        <ChartContext.Provider value={{text,handleEdit,setText,handlereply,reply,setreply,edit,setEdit,comment}}>{children}</ChartContext.Provider>
    )
}

export default ChartContext