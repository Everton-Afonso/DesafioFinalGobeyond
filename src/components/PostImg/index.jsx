import React from "react";

import "./styles.css";

function PostImg({ url }) {
  return (
    <div className="post-img">
      <img src={url} alt="imagens do model" />
    </div>
  );
}

export default PostImg;
