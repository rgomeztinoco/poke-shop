// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { CgPokemon, CgShoppingCart, CgLogOut } from "react-icons/cg";

function Header() {
  const style = css`
    padding-inline: 2.5rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    & a {
      font-weight: 700;
      text-decoration: none;
      color: white;
    }
  `;

  const navStyle = css`
    display: flex;
    gap: 1rem;
    font-size: 2.5rem;
  `;

  return (
    <header css={style}>
      <a href="/">
        <h1>Pokemon Shop</h1>
      </a>
      <nav css={navStyle}>
        <a href="/pokemons">
          <CgPokemon />
        </a>
        <a href="/cart">
          <CgShoppingCart />
        </a>
        <a href="/logout">
          <CgLogOut />
        </a>
      </nav>
    </header>
  );
}

export default Header;
