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

  return location ? (
    <div>
      <h1>{location.name}</h1>
      <h2>Areas:</h2>
      {location.areas.map((area) => {
        const id = getIdFromURL(area.url);
        return (
          <Button href={`/areas/${id}`} key={id}>
            {area.name}
          </Button>
        );
      })}
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default ShowLocationPage;
