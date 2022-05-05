// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, Global } from "@emotion/react";
import { global } from "./global";

function GlobalStyles() {
  return <Global styles={global} />;
}

export default GlobalStyles;
