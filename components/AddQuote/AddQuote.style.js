import css from "styled-jsx/css";

const AddQuoteStyles = css`
  .add-quote-form {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit {
    height: 34px;
    width: 100px;
    margin-left: 10px;
    border-radius: 30px;
    font-family: "Open Sans", sans-serif;
    color: white;
    background: #007065;
    line-height: 3;
  }

  form > input {
    height: 35px;
    width: 800px;
    font-size: 15px;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    border-radius: 40px;
    border: none;
  }

  form > input:focus {
    outline: none;
  }
`;

export default AddQuoteStyles;
