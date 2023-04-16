import React, { useContext } from "react";
import ChartContext from "../context/ChartContext";

import Comment from "./Comment";
import Input from "./Input";
import Comments from "./Comments";
import CommentList from "./CommentList";

const Home = () => {
  return (
    <div>
      <CommentList />
      {/* <Comments /> */}
      {/* <Input/> */}
    </div>
  );
};

export default Home;
