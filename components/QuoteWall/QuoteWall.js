import React from "react";
import TheQuote from "../TheQuote/TheQuote";
import QuoteWallStyles from "./QuoteWall.styles";

const QuoteWall = ({ quotes, subQuotes }) => {
  return (
    <div className="quote-wall">
      {quotes
        .map((quote, index) => {
          return (
            <TheQuote
              key={quote.id}
              quote={quote}
              subQuotes={subQuotes}
              className={index % 2 === 0 ? "even" : "odd"}
            />
          );
        })
        .reverse()}
      <style jsx>{QuoteWallStyles}</style>
      <style jsx global>{`
        html body {
          @import url("https://fonts.googleapis.com/css?family=Open+Sans:300i&display=swap");
          background: #007065;
          font-family: "Open Sans", sans-serif;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default QuoteWall;
