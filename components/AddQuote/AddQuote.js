import React from "react";
import AddQuoteStyles from "./AddQuote.style";

const AddQuote = () => {
  return (
    <form method="POST" action="/addQuote" className="add-quote-form">
      <input type="text" name="quote" />
      <input type="submit" />
      <style jsx>{AddQuoteStyles}</style>
    </form>
  );
};

export default AddQuote;
