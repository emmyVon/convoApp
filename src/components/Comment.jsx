import { useState } from 'react'
import replyicon from '../Assets/avatars/icon-reply.svg'
import Input from './Input'
import Data from '../Assets/data.json'
import deleteicon from '../Assets/avatars/icon-delete.svg'
import editicon from '../Assets/avatars/icon-edit.svg'

const Comment = ({ data, reply, switchReply,handleReply,text,setText }) => {
  const { createdAt, content, score, user:{image:{png,webp},username}, replies, id } = data

  return (
    <>
      <div className='overall'>
        <div className='container comment-section'>
          <div className="btn-container">
            <button>+</button>
            <h4>{score}</h4>
            <button>-</button>
          </div>
          <div className="right-side">
            <div className='user-info'>
              <div className='user_avater'>
                <img src={png} alt={username} />
                <p>{username}</p>
                <small>{createdAt}</small>
              </div>
              <button onClick={switchReply}><img src={replyicon} alt='reply-icon' />reply</button>
            </div>
            <p>{content}</p>
          </div>
        </div>
        {reply && <Input btnText={'Reply'} id={id}  handleReply={handleReply} text={text} setText={setText}/>}
      </div>
      <div className='replied-container'>
        <div className='replied-divid' />
        <div>
          {replies.map(item => {
            const { id, createdAt, content, score, user:{image:{png},username}, replyingTo } = item
            return (
              <div key={id} className='overall'>
                <div className='container comment-section'>
                  <div className="btn-container">
                    <button>+</button>
                    <h4>{score}</h4>
                    <button>-</button>
                  </div>
                  <div className="right-side">
                    <div className='user-info'>
                      <div className='user_avater'>
                        <img src={png} alt={username} />
                        <p>{username}</p>
                        <small>{createdAt}</small>
                      </div>
                      {Data.currentUser.username === username ? <div><button><img src={deleteicon} alt='delete-icon' />Delete</button><button><img src={editicon} alt='edit-icon' />edit</button></div>:<button><img src={replyicon} alt='reply-icon' />reply</button> }
                    </div>
                    <p>{`@${replyingTo}  ${content}`}</p>
                  </div>
                </div>
                {reply && <Input btnText={'Reply'} id={id} text={text} setText={setText} />}
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Comment