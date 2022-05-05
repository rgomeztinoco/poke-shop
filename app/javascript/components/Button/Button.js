import React from "react";

function Button({ href, content, ...rest }) {
  return (
    <a href={href}>
      <button {...rest}>{content}</button>
    </a>
  );
}

export default Button;
