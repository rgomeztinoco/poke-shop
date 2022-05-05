// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { POKE_URI } from "../../config";
import { useOnScreen } from "../../hooks/UseOnScreen";
import Button from "../Button/Button";
import PokemonCard from "../PokemonCard";

function PokemonEncounter({ name, top, left }) {
  const [pokemon, setPokemon] = useState(null);
  const [onScreenRef, isVisible] = useOnScreen({ rootMargin: "-250px" });
  const modalRef = useRef(null);

  useEffect(() => {
    fetch(`${POKE_URI}/pokemon/${name}`)
      .then((res) => res.json())
      .then((parsedRes) => {
        setPokemon(parsedRes);
      })
      .catch((e) => console.log(e.message));
  }, []);

  useEffect(() => {
    if (pokemon && isVisible) {
      modalRef.current.showModal();
    }
  }, [isVisible]);

  const handleCloseModal = () => {
    modalRef.current.close();
  };

  const style = css`
    position: absolute;
    width: 250px;
    top: ${top}px;
    left: ${left}px;
    z-index: 2;
  `;

  const modalStyle = css`
    margin: auto;
    padding: 0;
    width: 80%;
    max-width: 300px;
    border: none;
    background-color: transparent;
    &::backdrop {
      background-color: black;
      opacity: 0.5;
    }
  `;

  const footerStyle = css`
    padding-block: 1rem;
    display: flex;
    justify-content: space-between;
  `;

  return pokemon ? (
    <div>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        ref={onScreenRef}
        css={style}
      />
      <dialog ref={modalRef} css={modalStyle}>
        <PokemonCard {...{ pokemon }} />
        <div css={footerStyle}>
          <Button>Capture</Button>
          <Button outline onClick={handleCloseModal}>
            Leave
          </Button>
        </div>
      </dialog>
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default PokemonEncounter;
