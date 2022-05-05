// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useRef } from "react";
import { UseKeyDown, UseKeyUp } from "../../hooks/UseKeys";

function Character() {
  const characterRef = useRef();

  UseKeyDown("ArrowUp", () =>
    characterRef.current.classList.add("face-up", "animate")
  );
  UseKeyUp("ArrowUp", () =>
    characterRef.current.classList.remove("face-up", "animate")
  );
  UseKeyDown("ArrowRight", () =>
    characterRef.current.classList.add("face-right", "animate")
  );
  UseKeyUp("ArrowRight", () =>
    characterRef.current.classList.remove("face-right", "animate")
  );
  UseKeyDown("ArrowLeft", () =>
    characterRef.current.classList.add("face-left", "animate")
  );
  UseKeyUp("ArrowLeft", () =>
    characterRef.current.classList.remove("face-left", "animate")
  );
  UseKeyDown("ArrowDown", () =>
    characterRef.current.classList.add("face-down", "animate")
  );
  UseKeyUp("ArrowDown", () =>
    characterRef.current.classList.remove("face-down", "animate")
  );

  const style = css`
    --pixel-size: 6;
    width: calc(32px * var(--pixel-size));
    height: calc(32px * var(--pixel-size));
    overflow: hidden;
    position: relative;

    .animate {
      animation: moveSpritesheet 1s steps(4) infinite;
    }

    .Character_spritesheet {
      width: calc(128px * var(--pixel-size));
      position: absolute;
    }

    .Character_shadow {
      position: absolute;
      width: calc(32px * var(--pixel-size));
      height: calc(32px * var(--pixel-size));
    }

    .face-right {
      top: calc(-32px * var(--pixel-size));
    }
    .face-up {
      top: calc(-64px * var(--pixel-size));
    }
    .face-left {
      top: calc(-96px * var(--pixel-size));
    }

    @keyframes moveSpritesheet {
      from {
        transform: translate3d(0px, 0, 0);
      }
      to {
        transform: translate3d(-100%, 0, 0);
      }
    }
  `;

  return (
    <div css={style}>
      <img
        className="Character_shadow pixelart"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png"
        alt="Shadow"
      />
      <img
        className="Character_spritesheet pixelart"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png"
        alt="Character"
        ref={characterRef}
      />
    </div>
  );
}

export default Character;
