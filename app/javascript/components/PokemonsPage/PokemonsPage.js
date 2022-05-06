// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import PokemonCard from "../PokemonCard";

function PokemonsPage({ initialPokemons }) {
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

  return (
    <div css={style}>
      <h2>Your Pokemons:</h2>
      <div css={cardsStyle}>
        {pokemons.length ? (
          pokemons.map((pokemon) => {
            console.log(pokemon);
            return (
              <PokemonCard
                pokemon={JSON.parse(pokemon.jsonData)}
                key={pokemon.id}
              />
            );
          })
        ) : (
          <p>You haven't bougth any pokemons yet</p>
        )}
      </div>
    </div>
  );
}

export default PokemonsPage;
