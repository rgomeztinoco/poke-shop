// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import { POKE_URI } from "../../config";
import { useOnScreen } from "../../hooks/UseOnScreen";

function PokemonEncounter({ name }) {
  useOnScreen();

  return <div />;
}

export default PokemonEncounter;
