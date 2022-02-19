import React, { useState } from "react";
import useSound from "use-sound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import ReactAudioPlayer from "react-audio-player";
import "./audioPlayers.css";

export default function Audio({ channel }) {
  let [isMute, setIsMute] = useState(channel.muteStatus);
  let [audio, setAudio] = useState(channel.sound);
  let [mute] = useSound(audio);
  let [EnableSound] = useSound(audio); 
  let [volume, setVolume] = useState(1.0);

  return (
    <div>
      <div
        onMouseDown={() => {
          setAudio(channel.sound);
        }}
        onClick={() => {
          isMute = !isMute; //  a bug - here if i cancel this line, isMute is undefined else need to click twice on mute to see changes
          setIsMute(!isMute);
          if (isMute === false) {
            // an attempt to decrease volume to zero for mute - not working
            volume = 1.0;
            setVolume(1.0);
          } else {
            volume = 0.0;
            setVolume(0.0);
          }
        }}
      >
        <h1 style={{ backgroundColor: channel.color }} className="title"> 
          {channel.name}
        </h1>
        <ReactAudioPlayer
          volume={volume}
          muted={isMute}
          loop={true}
          className="audioStyle"
          controls={false}
        />
        {isMute ? (
          <FontAwesomeIcon icon={faVolumeMute} style={{ blockSize: 30 }} /> //mute button when on sound
        ) : (
          <FontAwesomeIcon icon={faVolumeUp} style={{ blockSize: 30 }} /> //unmute button when on mute
        )}
      </div>
    </div>
  );
}
