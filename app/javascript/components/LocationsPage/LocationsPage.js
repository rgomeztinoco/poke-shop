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

  return (
    <div>
      <h1>Kanto Region</h1>
      {locations ? (
        locations.map((location) => {
          const id = getIdFromURL(location.url);
          return (
            <Button
              href={`/locations/${id}`}
              content={location.name}
              key={id}
            />
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default LocationsPage;
