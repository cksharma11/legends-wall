import React from "react";
import AddQuoteStyles from "./AddQuote.style";

const AddQuote = () => {
  return (
    <form method="POST" action="/addQuote" className="add-quote-form">
      <input type="text" name="quote" required/>
      <button className="submit">Add Quote</button>
      <style jsx>{AddQuoteStyles}</style>
    </form>
  );
};

export default AddQuote;
