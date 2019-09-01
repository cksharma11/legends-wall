import React, { useState } from "react";
import LikesBarStyles from "./LikesBar.style";
import httpService from "../../httpService/httpService";

const LikeBar = ({ likes = 0, id }) => {
  const likeQuote = async () => {
    window.location.reload();
    const r = await httpService.post("http://localhost:8080/like", {
      body: JSON.stringify({
        id: id,
        likes: likes
      })
    });
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
