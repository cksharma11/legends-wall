import React from "react";
import SubQuotesStyles from "./SubQuotes.style";
import AddSubQuote from "../AddSubQuote/AddSubQuote";

const SubQuotes = ({ quote, background, subQuotes, hideSubQuotes }) => {
  return (
    <div className="main-container">
      <div className={`sub-quote odd`}>
        <div className="main-quote">{quote}</div>
        <img
          src="https://img.icons8.com/windows/32/000000/delete-sign.png"
          className="close-icon"
          onClick={hideSubQuotes}
        />
        <AddSubQuote />
        <div className="sub-quote-container">
          {subQuotes.map(subQuote => {
            return <div className="sub-quote-line">{subQuote}</div>;
          })}
        </div>
      </div>
      <style jsx>{SubQuotesStyles}</style>
    </div>
  );
};

export default SubQuotes;
