import { useEffect, useRef } from "react";

export function UseKeyDown(keyCode, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function handler(event) {
      if (event.code === keyCode) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [keyCode]);
}

export function UseKeyUp(keyCode, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function handler(event) {
      if (event.code === keyCode) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("keyup", handler);
    return () => {
      document.removeEventListener("keyup", handler);
    };
  }, [keyCode]);
}
