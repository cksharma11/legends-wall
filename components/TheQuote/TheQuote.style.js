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
    border-radius: 3px;
    text-align: center;
    transition: transform 0.1s;
  }

  .quote-line:hover {
    cursor: pointer;
    transition: transform 0.1s;
    transform: scale(1.05);
    box-shadow: 0px 0px 10px gray;
  }

  .even {
    background: #f5c181;
  }

  .odd {
    background: #00a79d;
  }
  .quote {
    padding: 10px;
  }
`;

export default TheQuoteStyles;
