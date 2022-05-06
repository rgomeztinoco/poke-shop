// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import { POKE_URI } from "../../config";
import Character from "../Character";
import MapComponent from "../MapComponent";

function LocationAreaPage({ id, user }) {
  const [area, setArea] = useState("");

  useEffect(() => {
    fetch(`${POKE_URI}/location-area/${id}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        setArea(parsedRes);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const style = css`
    height: 100%;
    position: relative;
    display: grid;
    place-content: center;
    overflow: hidden;

    .pixelart {
      image-rendering: pixelated;
    }
  `;

  const titleStyle = css`
    position: absolute;
    top: 1rem;
    left: 2rem;
    z-index: 1;
    background-color: whitesmoke;
    padding-block: 0.5rem;
    padding-inline: 2.5rem;
    border-radius: 100px;
  `;

  const getPokemonName = ({ pokemon }) => pokemon.name;

  return area ? (
    <div css={style}>
      <h1 css={titleStyle}>{area.name}</h1>
      <MapComponent
        {...{ user }}
        pokemonNames={area.pokemon_encounters.map(getPokemonName)}
      />
      <Character />
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default LocationAreaPage;
