import React from "react";
import TheQuote from "../TheQuote/TheQuote";
import QuoteWallStyles from "./QuoteWall.styles";

const QuoteWall = ({ quotes }) => {
  return (
    <div className="quote-wall">
      {quotes
        .map((quote, index) => {
          return (
            <TheQuote
              key={quote.id}
              quote={quote}
              className={index % 2 === 0 ? "even" : "odd"}
            />
          );
        })
        .reverse()}
      <style jsx>{QuoteWallStyles}</style>
      <style jsx global>{`
        html body {
          background: #007065;
          font-family: fantasy;
        }
      `}</style>
    </div>
  );
};

export default QuoteWall;
