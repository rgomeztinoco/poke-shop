// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import { POKE_URI } from "../../config";
import { getIdFromURL } from "../../helpers/get_id";
import Button from "../Button";

function LocationsPage() {
  const [locations, setLocations] = useState("");

  useEffect(() => {
    fetch(`${POKE_URI}/region/kanto`)
      .then((res) => res.json())
      .then((region) => {
        setLocations(region.locations);
      });
  }, []);

  const style = css`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `;

  const buttonsStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `;

  return (
    <div css={style}>
      <h1>Kanto Region</h1>
      <div css={buttonsStyle}>
        {locations ? (
          locations.map((location) => {
            const id = getIdFromURL(location.url);
            return (
              <Button href={`/locations/${id}`} key={id}>
                {location.name}
              </Button>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default LocationsPage;
