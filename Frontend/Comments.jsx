import React, { useRef } from "react";
import classes from "./Comments.module.css";
import axios from "axios";
const Comments = ({ _id, comments = [] }) => {
  const comment = useRef();
  const username = localStorage.getItem("username");

  return (
    <div className={classes.Comments}>
      <h3>Comments</h3>
      <div className={classes.Comments_AddCommentContainer}>
        <textarea
          ref={comment}
          rows={5}
          placeholder={"Enter your comment here"}
        />
        <button onClick={AddComment} className={classes.Comments_AddBtn}>
          Add Comment
        </button>
      </div>
      <div className={classes.Comments_commentsContainer}>
        {comments.map((item) => (
          <div className={classes.Comments_SingleComment}>
            <div className={classes.Comments_CommentInfo}>
              <p className={classes.Comments_Author}>Author</p>
              <p className={classes.Comments_Data}>26 Mar 2023</p>
            </div>
            <p>Really great blog</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
