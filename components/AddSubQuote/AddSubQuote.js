import React from "react";
import AddSubQuoteStyles from "./AddSubQuote.style";

const AddSubQuote = () => {
  return (
    <form method="POST" action="/addSubQuote" className="add-quote-form">
      <input
        type="text"
        name="subQuote"
        placeholder="Remember you are writing on legends wall"
        required
      />
      <button className="submit">Comment Sub Quote</button>
      <style jsx>{AddSubQuoteStyles}</style>
    </form>
  );
};

export default AddSubQuote;
