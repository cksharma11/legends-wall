import React from "react";
import TheQuote from "../TheQuote/TheQuote";
import QuoteWallStyles from "./QuoteWall.styles";

const QuoteWall = ({ quotes }) => {
  return (
    <div className="quote-wall">
      {quotes.map((quote, index) => {
        return (
          <TheQuote
            key={quote.id}
            quote={quote}
            className={index % 2 === 0 ? "even" : "odd"}
          />
        );
      })}
      <style jsx>{QuoteWallStyles}</style>
    </div>
  );
};

export default QuoteWall;
