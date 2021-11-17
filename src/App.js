import { useRef,useState } from "react";
import { useEffect } from "react";
import Library from "./Components/Library";
import Header from "./Components/Header";
import Player from "./Components/Player";
function App() {
  let audioRef=useRef("");
  let [libraryAction,setlibraryAction]=useState(false);
  const [songs,setsongs] = useState([]);
  const [currentSong, setcurrentSong] = useState({});
  const [isPlaying, setisPlaying] = useState(false);
  const [curentTime, setcurentTime] = useState(0);
  useEffect( ()=>{
    let data=  fetch('https://api-v2.hearthis.at/djdalallondon/?type=likes&page=2&count=50').then((res)=>res.json()).then((mydata)=>{
      setsongs(mydata)
      setcurrentSong(mydata[0])
    });
},[])

  function timeHandler(e){
    setcurentTime(e.target.currentTime);
    
  }
  
  return (
    <div className="App">
      <Library libraryAction={libraryAction} audioRef={audioRef} setisPlaying={setisPlaying} setcurrentSong={setcurrentSong} songs={songs} />
      <div className="main-area">
        <Header libraryAction={libraryAction} setlibraryAction={setlibraryAction} />
      <div className='player-area'>
        <Player setcurrentSong={setcurrentSong} setcurentTime={setcurentTime} curentTime={curentTime} audioRef={audioRef} setisPlaying={setisPlaying} songs={songs} isPlaying={isPlaying} currentSong={currentSong} />
      </div>
      </div>
      <audio onTimeUpdate={(e)=>{timeHandler(e)}} ref={audioRef} src={currentSong.stream_url} ></audio>
    </div>
    
  );
}

export default App;
