import React from "react";
import TheQuote from "../TheQuote/TheQuote";
import QuoteWallStyles from "./QuoteWall.styles";

const QuoteWall = ({ quotes }) => {
  return (
    <div>
      {quotes.map(quote => {
        return <TheQuote quote={quote.quote} likes={0} />;
      })}
      <style jsx>{QuoteWallStyles}</style>
    </div>
  );
};

export default QuoteWall;
