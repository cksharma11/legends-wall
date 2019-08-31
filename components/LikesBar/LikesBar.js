import React from "react";
import LikesBarStyles from "./LikesBar.style";
import httpService from "../../httpService/httpService";

const LikeBar = ({ likes = 0, id }) => {
  const likeQuote = async () => {
    httpService.post("http://localhost:8080/likes", { body: { id, likes } });
  };

  return (
    <div className="likebar">
      <button className="likes">{likes}</button>
      <button className="like-button" onClick={likeQuote}>
        Like
      </button>
      <style jsx>{LikesBarStyles}</style>
    </div>
  );
};

export default LikeBar;
