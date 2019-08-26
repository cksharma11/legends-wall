import React from "react";
import TheQuoteStyles from "./TheQuote.style";
import LikeBar from "../LikesBar/LikesBar";

const TheQuote = ({ quote, likes }) => {
  return (
    <div>
      <div>{quote}</div>
      <LikeBar />
      <style jsx>{TheQuoteStyles}</style>
    </div>
  );
};

export default TheQuote;
