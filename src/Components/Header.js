import React from 'react'
import gaanaLogo from '../images/gaanaLogo.svg';
import music from '../images/music.svg';
const Header = ({libraryAction,setlibraryAction}) => {
    function toggleLibrary() {
        setlibraryAction(!libraryAction);
    }

    return (
        <div>
            <header>
                <img className="logo" src={gaanaLogo} alt=""  />
                <button onClick={toggleLibrary}> Library <img src={music} alt=""  /> </button>
            </header>
        </div>
    )
}

export default Header
