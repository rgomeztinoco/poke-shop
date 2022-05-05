// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function PokemonCard({ pokemon }) {
  const style = css`
    padding: 1rem;
    background-color: whitesmoke;
    border-radius: 1rem;
    & img {
      padding-inline: 1rem;
    }
  `;

  const pillStyle = css`
    display: inline-block;
    background-color: gainsboro;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    border-radius: 10px;
  `;

  const headerStyle = css`
    display: flex;
    justify-content: space-between;
  `;

  const pillsStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  `;

  const subtitleStyle = css`
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  `;

  return pokemon ? (
    <div css={style}>
      <div css={headerStyle}>
        <span>#{pokemon.id}</span>
        <span>{pokemon.name}</span>
      </div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p css={subtitleStyle}>Types:</p>
      <div css={pillsStyle}>
        {pokemon.types.map(({ type }) => (
          <p css={pillStyle} key={type.name}>
            {type.name}
          </p>
        ))}
      </div>
      <p css={subtitleStyle}>Abilities:</p>
      <div css={pillsStyle}>
        {pokemon.abilities.map(({ ability }) => (
          <p css={pillStyle} key={ability.name}>
            {ability.name}
          </p>
        ))}
      </div>
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default PokemonCard;
