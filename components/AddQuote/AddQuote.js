import React from "react";
import AddQuoteStyles from "./AddQuote.style";

const AddQuote = () => {
  return (
    <form method="POST" action="/addQuote" className="add-quote-form">
      <input
        autocomplete="off"
        type="text"
        name="quote"
        placeholder="Remember you are writing on legends wall"
        required
      />
      <button className="submit">Add Quote</button>
      <style jsx>{AddQuoteStyles}</style>
    </form>
  );
};

export default AddQuote;
