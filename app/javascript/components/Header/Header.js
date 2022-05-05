// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { CgPokemon } from "react-icons/cg";
import { SiPokemon } from "react-icons/si";

function Header() {
  const style = css`
    display: flex;
    background-color: red;
  `;

  return (
    <header css={style}>
      <h1>Pokemon Shop</h1>
      <SiPokemon style={{ fontSize: "10rem" }} />
      <CgPokemon style={{ fontSize: "2.5rem" }} />
    </header>
  );
}

export default Header;
