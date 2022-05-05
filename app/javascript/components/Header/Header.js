// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { CgPokemon, CgShoppingCart } from "react-icons/cg";

function Header() {
  const style = css`
    padding-inline: 2.5rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
  `;

  const navStyle = css`
    display: flex;
    gap: 1rem;
    font-size: 2.5rem;
  `;

  return (
    <header css={style}>
      <h1>Pokemon Shop</h1>
      <nav css={navStyle}>
        <CgPokemon />
        <CgShoppingCart />
      </nav>
    </header>
  );
}

export default Header;
