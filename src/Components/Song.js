import React from 'react'

const Song = ({song,setisPlaying,audioRef,setcurrentSong}) => {
    function clickHandle(){
       setcurrentSong(song)
       setTimeout(()=>{
        setisPlaying(true);
        audioRef.current.play();
      },10)
    }
    return (
        <div onClick={clickHandle} className="song">
            <img src={song.background_url} alt=""  />
            <div className="song-info">
                <h3>{song.title}</h3>
                <h5>{song.user.username}</h5>
            </div>
        </div>
    )
}

export default Song
