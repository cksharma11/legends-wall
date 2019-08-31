import React, { useState, Fragment } from "react";
import TheQuoteStyles from "./TheQuote.style";
import LikeBar from "../LikesBar/LikesBar";
import SubQuotes from "../SubQuotes/SubQuotes";

const TheQuote = ({ quote, className }) => {
  const [subQuoteToggle, setSubQuoteToggle] = useState(false);

  const showSubQuotes = () => {
    setSubQuoteToggle(true);
  };

  const hideSubQuotes = () => {
    setSubQuoteToggle(false);
  };

  const { quote: quoteText, likes, id } = quote;
  return (
    <Fragment>
      {subQuoteToggle ? (
        <SubQuotes
          quote={quoteText}
          background={className}
          subQuotes={[
            'Who is that legend :)',
            'Fuck the hell of this legend!!',
            'Ohh God love this quote :: Fuking bullshit'
          ]}
          hideSubQuotes={hideSubQuotes}
        />
      ) : null}
      <div className={`quote-line ${className}`}>
        <div className="quote" onClick={showSubQuotes}>
          {quoteText}
        </div>
        <LikeBar likes={likes} id={id} />
        <style jsx>{TheQuoteStyles}</style>
      </div>
    </Fragment>
  );
};

export default TheQuote;
