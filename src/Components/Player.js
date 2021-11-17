import React from "react";
import next from "../images/next.svg";
import prev from "../images/prev.svg";
import play from "../images/play.svg";
import pause from "../images/icons8_pause.svg";
const Player = ({
  curentTime,
  audioRef,
  currentSong,
  isPlaying,
  songs,
  setisPlaying,
  setcurentTime,
  setcurrentSong
}) => {
 

  
  
  function playHandler() {
    setisPlaying(true);
    audioRef.current.play();
  }
  function pauseHandler() {
    setisPlaying(false);
    audioRef.current.pause();
  }
  function getDuration(duration) {
    let minute = Math.floor(duration / 60);
    let sec = duration % 60;
    sec = sec < 10 ? `0${sec}` : sec;
    return `${minute}:${sec}`;
  }
  function getDuration(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    } else {
      return "0:00";
    }
  }
  function sliderHandler(e){
    setcurentTime(e.target.value);
    audioRef.current.currentTime=e.target.value
  }
  function nextSong() {
    
    if(songs.indexOf(currentSong)>=songs.length-1){
      setcurrentSong(songs[songs.indexOf(currentSong)]);
    }else{
    setcurrentSong(songs[songs.indexOf(currentSong)+1]);
  }
    setTimeout(()=>{
      setisPlaying(true);
      audioRef.current.play();
    },30)
    
    
    
    }

    function prevSong() {
      if(songs.indexOf(currentSong)<=0){
        setcurrentSong(songs[songs.indexOf(currentSong)]);
      }else{
      setcurrentSong(songs[songs.indexOf(currentSong)-1]);
    }
      setTimeout(()=>{
        setisPlaying(true);
        audioRef.current.play();
      },30)
      
     
      
      }
  return (
    <div className="player-container">
      <img src={currentSong.artwork_url} alt="" />

      <div className="player-controls">
        <h4>{currentSong.title}</h4>
        <div style={{ display: "flex" }}>
          <p >{getDuration(curentTime)}</p>
         
          <input
            onChange={(e) => {
              sliderHandler(e);
            }}
            min="0"
            value={curentTime}
            max={currentSong.duration}
            type="range"
            id="input"
          />
          <p>{getDuration(currentSong.duration)}</p>
        </div>
        <div
          className="player-buttons"
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img onClick={prevSong} style={{ width: 40 }} src={prev} alt="" />
          {isPlaying ? (
            <img
              onClick={pauseHandler}
              style={{ width: 40 }}
              src={pause}
              alt=""
            />
          ) : (
            <img
              onClick={playHandler}
              style={{ width: 40 }}
              src={play}
              alt=""
            />
          )}
          <img onClick={nextSong} style={{ width: 40 }} src={next} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Player;
