import React from "react";
import LikesBarStyles from "./LikesBar.style";

const LikeBar = ({ likes = 0 }) => {
  return (
    <div className='likebar'>
      <button className="likes">{likes}</button>
      <button className="like-button">Like</button>
      <style jsx>{LikesBarStyles}</style>
    </div>
  );
};

export default LikeBar;
