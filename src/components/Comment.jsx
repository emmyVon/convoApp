import { useState } from "react";
import replyicon from "../Assets/avatars/icon-reply.svg";
import Input from "./Input";
import Data from "../Assets/data.json";
import deleteicon from "../Assets/avatars/icon-delete.svg";
import editicon from "../Assets/avatars/icon-edit.svg";

const Comment = ({ data, comments, setComments, text, setText }) => {
  const {
    createdAt,
    content,
    score,
    user: {
      image: { png },
      username,
    },
    replies,
    id,
  } = data;
  const [edit, setEdit] = useState(false);
  const [reply, setReply] = useState(false);
  const switchReply = () => setReply(!reply);
  const handleReply = (id) => {
    const updatedComment = [...comments];
    const commentIndex = comments.findIndex((i) => i === id);
    const newreply = { id: new Date().getTime().toString(), content: text };
    updatedComment[commentIndex].replies.push(newreply);
    setComments(updatedComment);
    setReply(false);
    setText("");
    console.log(comments);
  };
  const OnEdit = (id) => {
    setEdit(true);
    const EditedComment = comments.find((i) => i.id === id);
    setText(EditedComment.content);
    console.log(text);
  };
  //  const handleEdit= (id)=>{
  //     if(text && edit){
  //         setComments(
  //             comments.map(item=>{
  //             if(item.id===id){
  //                 return{...item,content:text}
  //             }
  //             return item
  //    })
  //         )
  //     }
  //     setEdit(false)
  //    console.log(comments)
  // }
  const handleDelete = (id) => {
    return replies.filter((item) => item.id !== id);
  };

  return (
    <>
      <div className="overall">
        <div className="container comment-section">
          <div className="btn-container">
            <button>+</button>
            <h4>{score}</h4>
            <button>-</button>
          </div>
          <div className="right-side">
            <div className="user-info">
              <div className="user_avater">
                <img src={png} alt={username} />
                <p>{username}</p>
                <small>{createdAt}</small>
              </div>
              <button onClick={switchReply}>
                <img src={replyicon} alt="reply-icon" />
                reply
              </button>
            </div>
            <p>{content}</p>
          </div>
        </div>
        {reply && (
          <Input
            btnText={"Reply"}
            id={id}
            handleReply={handleReply}
            text={text}
            setText={setText}
          />
        )}
      </div>
      <div className="replied-container">
        <div className="replied-divid" />
        <div>
          {replies.map((item) => {
            const {
              id,
              createdAt,
              content,
              score,
              user: {
                image: { png },
                username,
              },
              replyingTo,
            } = item;
            return (
              <div key={id} className="overall">
                <div className="container comment-section">
                  <div className="btn-container">
                    <button>+</button>
                    <h4>{score}</h4>
                    <button>-</button>
                  </div>
                  <div className="right-side">
                    <div className="user-info">
                      <div className="user_avater">
                        <img src={png} alt={username} />
                        <p>{username}</p>
                        <small>{createdAt}</small>
                      </div>
                      {Data.currentUser.username === username ? (
                        <div>
                          <button onClick={() => handleDelete(id)}>
                            <img src={deleteicon} alt="delete-icon" />
                            Delete
                          </button>
                          <button onClick={() => OnEdit(id)}>
                            <img src={editicon} alt="edit-icon" />
                            edit
                          </button>
                        </div>
                      ) : (
                        <button onClick={switchReply}>
                          <img src={replyicon} alt="reply-icon" />
                          reply
                        </button>
                      )}
                    </div>
                    <p>{`@${replyingTo}  ${content}`}</p>
                  </div>
                </div>
                {reply && (
                  <Input
                    btnText={"Reply"}
                    id={id}
                    text={text}
                    setText={setText}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comment;
