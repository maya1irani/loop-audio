import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "./audioPlayers.css";
import ReactHowler from "react-howler";

export default function AudioPlayers(props) {
  //state hooks
  const channel = props.channel;
  let [isMute, setIsMute] = useState(false);

  return (
    <div>
      <h1 style={{ backgroundColor: channel.color }} className="title">
        {channel.name}
      </h1>
      <ReactHowler //the audio player and it's properties
        src={props.channel.sound}
        playing={props.isPlay}
        mute={isMute}
        volume={0.95}
        loop={props.isLoop}
      />
      {isMute ? (
        //mute button when on sound
        <FontAwesomeIcon
          onClick={() => {
            setIsMute(!isMute);
          }}
          icon={faVolumeMute}
          style={{ blockSize: 30 }}
        />
      ) : (
        //unmute button when on mute
        <FontAwesomeIcon
          onClick={() => {
            setIsMute(!isMute);
          }}
          icon={faVolumeUp}
          style={{ blockSize: 30 }}
        />
      )}
    </div>
  );
}
