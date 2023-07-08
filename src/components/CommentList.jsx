import React, { useState } from "react";
import Data from "../Assets/data.json";
import ReplyView from "./ReplyView";
import imagejulius from "../Assets/avatars/image-juliusomo.png";

const CommentList = () => {
  const [commentList, setCommentList] = useState([...Data.comments]);
  const [text, setText] = useState("");

  const handleAddComment = () => {
    setCommentList((prev) => [
      ...prev,
      {
        id: Math.random(),
        content: text,
        createdAt: "1 minute ago",
        score: 0,
        user: Data.currentUser,
        replies: [],
      }],
    );

    setText("");
  };

  const handleDeleteComment = (commentId) => {
    setCommentList((prev) => prev.filter((i) => i.id !== commentId));
  };

  const handleEditComment = ({ commentId, commentEditText }) => {
    const updatedCommentList = commentList.map((i) => {
      if (i.id === commentId) {
        i.content = commentEditText;
      }
      return i;
    });

    setCommentList(updatedCommentList);
  };

  return (
    <section>
      {commentList.map((data, i) => {
        return (
          <ReplyView
            key={data.id}
            comment={data}
            handleDeleteReply={handleDeleteComment}
            handleEditReply={handleEditComment}
          />
        );
      })}

      <div className="input-section">
        <img src={imagejulius} alt="img" />
        <input
          type="text"
          placeholder="Add a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
    </section>
  );
};

export default CommentList;
