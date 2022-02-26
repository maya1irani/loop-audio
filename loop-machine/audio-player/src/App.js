import "./App.css";
import React, { useState, useRef } from "react";
import AudioButtons from "./components/audioButtons";
import AudioPlayers from "./components/audioPlayers/audioPlayers";
import Slider from "./components/slider";
import Sound1 from "../src/audio/_tambourine_shake_higher.mp3";
import Sound2 from "../src/audio/B VOC.mp3";
import Sound3 from "../src/audio/DRUMS.mp3";
import Sound4 from "../src/audio/HE HE VOC.mp3";
import Sound5 from "../src/audio/HIGH VOC.mp3";
import Sound6 from "../src/audio/JIBRISH.mp3";
import Sound7 from "../src/audio/LEAD 1.mp3";
import Sound8 from "../src/audio/UUHO VOC.mp3";

function App() {
  //state hooks
  const [isPlay, setIsPlay] = useState(false);
  let [seek, setSeek] = useState(0.0);
  let [isLoop, setIsLoop] = useState(false);
  const [precentage, setPrecentage] = useState(0);
  //meant to handle change on seeking - not working
  const onChange = (e) => {
    setPrecentage(e.target.value);
  };

  //channel object
  const Channel = (name, sound, color) => {
    return { name: "Clip Name:" + name, sound: sound, color: color };
  };

  //array of all channels
  const channels = [
    Channel("_tambourine_shake_higher", Sound1, "Lightblue", false),
    Channel("B VOC", Sound2, "red", false),
    Channel("DRUMS", Sound3, "pink", false),
    Channel("HE HE VOC", Sound4, "Lightyellow", false),
    Channel("HIGH VOC", Sound5, "Lightgreen", false),
    Channel("JIBRISH", Sound6, "purple", false),
    Channel("LEAD 1", Sound7, "Lightgray", false),
    Channel("UUHO VOC", Sound8, "orange", false),
  ];

  //display of audios
  const listChannels = channels.map((channel) => (
    <li key={channel.name}>
      <AudioPlayers
        channel={channel}
        isPlay={isPlay}
        seek={seek}
        isLoop={isLoop}
      ></AudioPlayers>
    </li>
  ));

  return (
    <div className="App">
      <header>
        <Slider precentage={precentage} seek={seek} onChange={onChange} />
        <ul>{listChannels}</ul>

        <AudioButtons //Main buttons bar
          onStop={() => setIsPlay(false)}
          onPlay={() => setIsPlay(true)}
          seekToStart={() => setSeek(0.0)}
          toLoop={() => setIsLoop(true)}
          toStopLoop={() => setIsLoop(false)}
        ></AudioButtons>
      </header>
    </div>
  );
}

export default App;
