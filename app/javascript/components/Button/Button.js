// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function Button({ href = "#", children, outline, ...rest }) {
  const style = css`
    padding-block: 0.5rem;
    padding-inline: 2.5rem;
    color: ${outline ? "whitesmoke" : "whitesmoke"};
    font-weight: 700;
    background-color: ${outline ? "rgba(0, 0, 0, 0.3)" : "red"};
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.5s ease;
    ${outline && "border: whitesmoke solid 3px;"}
    &:hover {
      background-color: ${outline ? "rgba(0, 0, 0, 0.5)" : "darkred"};
    }
    &:active {
      transform: translateY(0.2em);
    }
  `;

  return (
    <a href={href}>
      <button {...rest} css={style}>
        {children}
      </button>
    </a>
  );
}

export default Button;
