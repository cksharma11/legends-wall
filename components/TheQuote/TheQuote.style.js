import css from "styled-jsx/css";

const TheQuoteStyles = css`
  .quote-line {
    height: 250px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
    margin: 10px;
    border: 1px solid black;
  }

  .even {
    background: white;
  }

  .odd {
    background: whitesmoke;
  }
  .quote {
    padding: 10px;
  }
`;

export default TheQuoteStyles;
