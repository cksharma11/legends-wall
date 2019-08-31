import css from "styled-jsx/css";

const SubQuotesStyles = css`
  .main-container {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    background: #3b3c3c78;
  }

  .sub-quote {
    height: 500px;
    width: 50%;
    z-index: 2;
    border-radius: 5px;
    box-shadow: 0px 0px 10px gray;
    position: relative;
    top: 15%;
    left: 25%;
    background: #007065;
  }

  .main-quote {
    padding: 15px 55px;
    font-size: 40px;
    text-align: center;
  }

  .sub-quote-container {
    display: flex;
    flex-direction: column;
    padding: 20px 10%;
    height: 50%;
    overflow: scroll;
  }

  .sub-quote-line {
    font-size: 20px;
    border-bottom: 1px solid gray;
    padding: 5px;
    margin: 5px;
  }

  .sub-quote-line::before {
    content: " - ";
  }

  .even {
    background: #f5c181;
  }

  .odd {
    background: #00a79d;
  }

  .close-icon {
    position: absolute;
    top: 0px;
    right: 0;
    width: 30px;
    padding: 15px;
  }

  .close-icon:hover {
    cursor: pointer;
  }
`;

export default SubQuotesStyles;
