// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import Button from "../Button";
import PokemonCard from "../PokemonCard";

function CartPage({ initialPokemons, user }) {
  const [pokemons, setPokemons] = useState(initialPokemons);

  const style = css`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `;

  const cardsStyle = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  `;

  const handleBuy = ({ id }) => {
    const data = { bought: true };
    fetch(`/pokemons/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        removePokemon(id);
        console.log(res);
      });
  };

  const handleDelete = () => {
    console.log("delete");
  };

  const removePokemon = (id) => {
    const pokemosnCopy = [...pokemons];
    const index = pokemosnCopy.findIndex((pokemon) => pokemon.id === id);
    pokemosnCopy.splice(index, 1);
    setPokemons(pokemosnCopy);
  };

  const footerStyle = css`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <div css={style}>
      <h2>Pokemons in your cart:</h2>
      <div css={cardsStyle}>
        {pokemons.length ? (
          pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <PokemonCard pokemon={JSON.parse(pokemon.jsonData)} />
              <div css={footerStyle}>
                <Button onClick={() => handleBuy({ id: pokemon.id })}>
                  Buy
                </Button>
                <Button onClick={handleDelete} outline>
                  Release
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>You haven't captured any pokemons yet</p>
        )}
      </div>
    </div>
  );
}

export default CartPage;
