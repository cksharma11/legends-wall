import css from "styled-jsx/css";

const CommentCountStyles = css`
  .count-container {
    display: flex;
    margin-right: 10px;
  }

  .count-container:hover {
    cursor: pointer;
  }
  
  .comment-logo {
    width: 50px;
    top: -5px;
    padding: 0 10px;
    position: relative;
  }
`;

export default CommentCountStyles;
