import React from "react";
import TheQuoteStyles from "./TheQuote.style";
import LikeBar from "../LikesBar/LikesBar";

const TheQuote = ({ quote, likes, className }) => {
  return (
    <div className={`quote-line ${className}`} >
      <div className="quote">{quote}</div>
      <LikeBar likes={likes}/>
      <style jsx>{TheQuoteStyles}</style>
    </div>
  );
};

export default TheQuote;
