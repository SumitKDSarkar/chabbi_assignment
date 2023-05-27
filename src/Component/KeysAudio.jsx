import React, { useEffect } from "react";
import audioSrc from "../Assestes/audio2.mp3";

const KeysAudio = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyCode = event.keyCode;
      let audio;

      // All keys audio
      if (keyCode >= 65 && keyCode <= 90) {
        audio = new Audio();
        audio.src = audioSrc;
      } else {
        return;
      }

      audio.load();
      audio.play();
    };

    // The keydown event listener
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <></>;
};

export default KeysAudio;
