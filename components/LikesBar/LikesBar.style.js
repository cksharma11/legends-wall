import css from "styled-jsx/css";

const LikesBarStyles = css`
  .like-button {
    height: 40px;
    border: none;
    background: no-repeat;
  }
  .like-button:focus {
    outline: none;
  }
  .likebar {
    display: flex;
  }
  .likes {
    border-radius: 50%;
    width: 30px;
  }
  .like-logo {
    width: 50px;
    position: relative;
    top: -10px;
  }

  .like-logo:hover {
    cursor: pointer;
  }
`;

export default LikesBarStyles;
