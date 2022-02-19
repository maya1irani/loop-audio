import './App.css';
import AudioButtons from './components/audioButtons';
import Audio from'./components/audioPlayers';
import Sound1 from "../src/audio/_tambourine_shake_higher.mp3";
import Sound2 from "../src/audio/B VOC.mp3";
import Sound3 from "../src/audio/DRUMS.mp3";
import Sound4 from "../src/audio/HE HE VOC.mp3"
import Sound5 from "../src/audio/HIGH VOC.mp3";
import Sound6 from "../src/audio/JIBRISH.mp3";
import Sound7 from "../src/audio/LEAD 1.mp3";
import Sound8 from "../src/audio/UUHO VOC.mp3";

function App() {

const Channel = (name, sound, color, muteStatus) => { return {name: name, sound: sound, color: color, muteStatus:muteStatus } } //channel object

const channels=[
  Channel('_tambourine_shake_higher',Sound1,'blue',false),Channel('B VOC',Sound2,'red',false)
  ,Channel('DRUMS',Sound3,'pink',false),Channel('HE HE VOC',Sound4,'yellow',false),
  Channel('HIGH VOC',Sound5,'green',false),Channel('JIBRISH',Sound6,'purple',false),
  Channel('LEAD 1',Sound7,'gray',false),Channel('UUHO VOC',Sound8,'gold',false),]; //array of all channels

const listChannels=channels.map((channel)=> //display of audios
<li key={channel.name}><Audio  channel={channel}></Audio>
<AudioButtons channel={channel}></AudioButtons></li>); 

return (
    <div className="App">
      <header>
<ul>{listChannels}</ul>
      </header>
    </div>
  );
}

export default App;
