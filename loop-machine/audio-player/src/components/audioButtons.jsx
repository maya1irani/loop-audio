import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { Howler } from "howler";

export default function AudioButtons(props) {
  //state hooks
  let [isLoop, setIsLoop] = useState(false);
  let [playing, setPlaying] = useState(true);
  return (
    <React.Fragment>
      {playing ? (
        <FontAwesomeIcon //play button - plays all audios simultanesly
          style={{ blockSize: 30, margin: 2 }}
          icon={faPlayCircle}
          onClick={() => {
            props.onPlay();
            setPlaying(false);
          }}
        />
      ) : (
        <FontAwesomeIcon //stop button - stop all audios simultanesly
          icon={faStopCircle}
          style={{ blockSize: 30, margin: 2 }}
          onClick={() => {
            props.onStop();
            Howler.stop();
            setPlaying(true);
          }}
        />
      )}
      <label>
        Loop:
        <input //loop check box if checked the audio will start again immidiatlly
          type="checkbox"
          checked={props.isLoop}
          onChange={() => {
            if (isLoop === false) {
              props.toLoop();
            } else {
              props.toStopLoop();
            }
            setIsLoop(!isLoop);
          }}
        />
      </label>
    </React.Fragment>
  );
}
