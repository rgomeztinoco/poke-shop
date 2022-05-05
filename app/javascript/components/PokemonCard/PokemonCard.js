// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import { POKE_URI } from "../../config";

function PokemonCard({ name, pokemonData, top, left }) {
  const [pokemon, setPokemon] = useState(pokemonData);

  useEffect(() => {
    if (pokemonData) return;

    fetch(`${POKE_URI}/pokemon/${name}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        setPokemon(parsedRes);
        console.log(parsedRes);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const style = css`
    padding: 0.5rem;
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    background-color: whitesmoke;
    border-radius: 0.5rem;
  `;

  return (
    <div css={style}>
      {pokemon ? (
        <div>
          <div>
            <span>#{pokemon.id}</span>
            <span>{pokemon.name}</span>
          </div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default PokemonCard;
