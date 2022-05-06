// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { getRandomInt } from "../../helpers/get_random";
import { UseKeyDown } from "../../hooks/UseKeys";
import PokemonEncounter from "../PokemonEncounter";

function MapComponent({ pokemonNames, user }) {
  const mapRef = useRef();

  UseKeyDown("ArrowUp", () => {
    const currentTop = parseInt(mapRef.current.style.top) || 0;
    if (currentTop >= 0) return;

    mapRef.current.style.top = `${currentTop + 10}px`;
  });
  UseKeyDown("ArrowDown", () => {
    const currentTop = parseInt(mapRef.current.style.top) || 0;
    if (currentTop <= -4000 + window.innerHeight - 60) return;

    mapRef.current.style.top = `${currentTop - 10}px`;
  });
  UseKeyDown("ArrowLeft", () => {
    const currentLeft = parseInt(mapRef.current.style.left) || 0;
    if (currentLeft >= 0) return;

    mapRef.current.style.left = `${currentLeft + 10}px`;
  });
  UseKeyDown("ArrowRight", () => {
    const currentLeft = parseInt(mapRef.current.style.left) || 0;
    if (currentLeft <= -6000 + window.innerWidth) return;

    mapRef.current.style.left = `${currentLeft - 10}px`;
  });

  const absoluteStyle = css`
    position: absolute;
  `;

  const style = css`
    position: relative;
  `;

  const mapStyle = css`
    position: absolute;
    width: calc(1000px * 6);
  `;

  return (
    <div css={absoluteStyle}>
      <div css={style} ref={mapRef}>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3365e80-3091-4d95-9008-a88c1235e1e8/d3e7neu-8c8d9592-6ac3-400e-9dc3-dabff38e6cd1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTMzNjVlODAtMzA5MS00ZDk1LTkwMDgtYTg4YzEyMzVlMWU4XC9kM2U3bmV1LThjOGQ5NTkyLTZhYzMtNDAwZS05ZGMzLWRhYmZmMzhlNmNkMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lcDClAmwVvTIurXcVWawHVjwKMAp6INzEPT1UGFgKf8"
          alt="map"
          className="pixelart"
          css={mapStyle}
        />
        {pokemonNames.map((name) => {
          return (
            <PokemonEncounter
              top={getRandomInt(4000 - 200)}
              left={getRandomInt(6000 - 200)}
              key={name}
              {...{ name, user }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MapComponent;
