import React from 'react'
import Song from './Song'
const Library = ({audioRef,setisPlaying,setcurrentSong,songs,libraryAction}) => {
    return (
        <div className="library" style={libraryAction ?{ marginLeft:-400} :{ marginLeft:0} } >
            <h2>Library</h2>
            {songs.map((song)=>{
                return <Song audioRef={audioRef} setisPlaying={setisPlaying} setcurrentSong={setcurrentSong}   song={song} key={song.id} />
            })}
            
        </div>
    )
}

export default Library
