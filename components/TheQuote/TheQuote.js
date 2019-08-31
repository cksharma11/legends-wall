import React from "react";
import TheQuoteStyles from "./TheQuote.style";
import LikeBar from "../LikesBar/LikesBar";

const TheQuote = ({ quote, className }) => {
  const { quote: quoteText, likes, id } = quote;
  return (
    <div className={`quote-line ${className}`}>
      <div className="quote">{quoteText}</div>
      <LikeBar likes={likes} id={id} />
      <style jsx>{TheQuoteStyles}</style>
    </div>
  );
};

export default TheQuote;
