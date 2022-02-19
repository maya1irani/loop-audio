import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faInfinity,
  faStopCircle,
} from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";

export default function AudioButtons({ channel }) { //audio should get one channel at a time.
  let [playing, setPlaying] = useState(false);
  let [loop] = useSound();
  let [audio, setAudio] = useState(channel.sound);
  let [play, { stop }] = useSound(audio);

  function playClick() { //function that handels click on play button, playing audio
    setAudio(channel.sound);
    console.log(audio);
    play();
    setPlaying(!playing);
  }

  function stopClick() {  //function that handels click on stop button go back to start
    stop();
    setPlaying(!playing);
  }
  function loopClick() { //function that handels click on loop button, currently isn't working
    loop();
    setPlaying(playing)
  }

  return (
    <React.Fragment>  
      <FontAwesomeIcon   //play button
        style={{ blockSize: 30, margin: 2 }}
        icon={faPlayCircle}
        onClick={() => {
          playClick();
        }}
      />

      <FontAwesomeIcon  //stop button
        icon={faStopCircle}
        style={{ blockSize: 30, margin: 2 }}
        onClick={() => {
          stopClick();
        }}
      />

      <FontAwesomeIcon   //loop button
        style={{ blockSize: 30, margin: 2 }}
        icon={faInfinity}
        onClick={() => {
          loopClick();
        }}
      />
    </React.Fragment>
  );
}
