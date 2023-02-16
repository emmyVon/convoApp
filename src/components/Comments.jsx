import React from 'react'
import deleteicon from '../Assets/avatars/icon-delete.svg'
import editicon from '../Assets/avatars/icon-edit.svg'
import replyicon from '../Assets/avatars/icon-reply.svg'
import ChartContext from '../context/ChartContext'
import { useContext } from 'react'

const Comments = ({image,name,active,word,count,Id}) => {

    

    const{handleEdit,setText,handlereply,text,edit,comment} = useContext(ChartContext)
  return (
    <div>
        <section>
            <div className='container comment-section'>
                <div className='btn-container'>
                <button>+</button>
                <h4>{count}</h4>
                <button>-</button>
                </div>
                <div className='left-side'>
                    <div className = 'user-info'>
                        <div className='user_avater'>
                            <img src={image} alt='amy'/>
                            <p>{name}</p>
                            <small>{active}</small>
                        </div>
                        {edit? 
                            <div>
                            <button>
                                <img src={deleteicon} alt="delete" />
                                <p>Delete</p>
                            </button>
                            <button>
                                <img src={editicon} alt="delete" />
                                <p>Edit</p>
                            </button>
                            </div> : <button><img src={replyicon} alt= 'reply-icon' />reply</button> 
                        }
                    </div>
                    <p onClick={()=>handleEdit(Id)}>{word}</p>
                </div> 
            </div>    
        </section>
          
    </div>
  )
}

export default Comments