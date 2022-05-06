// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import { POKE_URI } from "../../config";
import { getIdFromURL } from "../../helpers/get_id";
import Button from "../Button";

function ShowLocationPage({ id }) {
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch(`${POKE_URI}/location/${id}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        setLocation(parsedRes);
      })
      .catch((e) => console.log(e.message));
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

  return location ? (
    <div css={style}>
      <h1>{location.name}</h1>
      <h2>Areas:</h2>
      <div css={buttonsStyle}>
        {location.areas.map((area) => {
          const id = getIdFromURL(area.url);
          return (
            <Button href={`/areas/${id}`} key={id}>
              {area.name}
            </Button>
          );
        })}
      </div>
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default ShowLocationPage;
