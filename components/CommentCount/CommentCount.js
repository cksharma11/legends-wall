import React from "react";
import CommentCountStyles from "./CommentCount.style";

const CommentCount = ({ count, onClick }) => {
  return (
    <div className="count-container" onClick={onClick}>
      <img
        src="https://img.icons8.com/carbon-copy/100/000000/speech-bubble-with-dots.png"
        className="comment-logo"
      />
      <div>{count}</div>
      <style jsx>{CommentCountStyles}</style>
    </div>
  );
};

export default CommentCount;
