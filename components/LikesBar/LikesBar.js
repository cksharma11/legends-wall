import React from "react";
import LikesBarStyles from "./LikesBar.style";
import httpService from "../../httpService/httpService";

const LikeBar = ({ likes = 0, id }) => {
  const likeQuote = async () => {
    httpService.post("http://localhost:8080/likes", { body: { id, likes } });
  };

  return (
    <div className="likebar">
      <button className="like-button" onClick={likeQuote}>
        <img
          src="https://img.icons8.com/carbon-copy/100/000000/facebook-like.png"
          className="like-logo"
        />
      </button>
      <div className="reactions">{likes}</div>
      <style jsx>{LikesBarStyles}</style>
    </div>
  );
};

export default LikeBar;
