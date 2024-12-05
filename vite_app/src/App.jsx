import React from 'react';
import './style.css';
import HomeIcon from './assets/Home.png';
import SearchIcon from './assets/Search.png';
import YourLibraryIcon from './assets/Your library.png';
import CreateIcon from './assets/Create.png';
import LikedIcon from './assets/Liked.png';
import YourEpisodesIcon from './assets/your episodes.png';
import InstallAppIcon from './assets/grommet-icons_install-option.png';
import SpotifyLogo from './assets/Spotify logo.png';
import TopArrowIcon from './assets/top arrow navigation.png';
import UserIcon from './assets/User.png';
import Image1 from './assets/image1.png';
import Image2 from './assets/image2.png';
import Image3 from './assets/image3.png';
import Image4 from './assets/image4.png';
import Image5 from './assets/image5.png';
import Image6 from './assets/image6.png';
import Image7 from './assets/image7.png';
import Image8 from './assets/image8.png';
import Image9 from './assets/image9.png';
import Image10 from './assets/image10.png';
import Image11 from './assets/image11.png';
import MusicPlayerOptions from './assets/Music Player Options.png';
import RightOptions from './assets/Right options.png';
import HeartIcon from './assets/bx_bxs-heart.png';

function App() {
    return(
        <>
            <nav className="sidebar">
                <div className="top">
                    <div className="logo">
                        <img src={SpotifyLogo} alt="Spotify Logo" />
                    </div>
                    <div className="center">
                        <a href="" className="imp">
                            <img src={HomeIcon} alt="Home Icon" />
                            <p className="home">Home</p>
                        </a>
                        <a href="">
                            <img src={SearchIcon} alt="Search Icon" />
                            <p className="home">Search</p>
                        </a>
                        <a href="">
                            <img src={YourLibraryIcon} alt="Your Library Icon" />
                            <p className="home">Your library</p>
                        </a>
                        <hr />
                        <a href="">
                            <img src={CreateIcon} alt="Create Icon" />
                            <p className="home">Create Playlist</p>
                        </a>
                        <a href="">
                            <img src={LikedIcon} alt="Liked Icon" />
                            <p className="home">Liked Songs</p>
                        </a>
                        <a href="">
                            <img src={YourEpisodesIcon} alt="Your Episodes Icon" />
                            <p className="home">Your Episodes</p>
                        </a>
                        <hr />
                        <a href=""><p className="Fav">FAV</p></a>
                        <a href=""><p className="Fav">Daily Mix 1</p></a>
                        <a href=""><p className="Fav">Discover Weekly</p></a>
                        <a href=""><p className="Fav">Dance/Electronic Mix</p></a>
                        <a href=""><p className="Fav">EDM/Populer</p></a>
                        <hr />
                        <a href="">
                            <img src={InstallAppIcon} alt="Install App Icon" />
                            <p className="home">Install App</p>
                        </a>
                    </div>
                </div>
            </nav>
            <h1>Good morning</h1>
            <div className="container">
                <div className="list_container">
                    <div className="left">
                        <img src={TopArrowIcon} alt="" className="arrow" />
                    </div>
                    <div className="right">
                        <img src={UserIcon} alt="" className="user" />
                    </div>
                </div>
            </div>
            <div className="main">
            <div className="item">
                <img src={LikedIcon} alt="Liked Songs" />
                <span>Liked Songs</span>
            </div>
            <div className="item">
                <img src={Image4} alt="Neffex Playlist" />
                <span>Neffex Playlist</span>
            </div>
            <div className="item">
                <img src={Image3} alt="K/DA" />
                <span>K/DA</span>
            </div>
            <div className="item">
                <img src={Image1} alt="Liked Songs" />
                <span>Liked Songs</span>
            </div>
            <div className="item">
                <img src={Image2} alt="Dance / Electronic Mix" />
                <span>Dance / Electronic <br />Mix</span>
            </div>
        </div>
        <div>
            <h2>Shows you might like</h2>
            <div className="main1">
        
        <div className="item1">
            <img src={Image9} alt="" />
            <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
        </div>
        <div className="item1">
            <img src={Image8} alt="" />
            <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
        </div>
        <div className="item1">
            <img src={Image7} alt="" />
            <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
        </div>
        <div className="item1">
            <img src={Image6} alt="" />
            <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
        </div>
        <div className="item1">
            <img src={Image5} alt="" />
            <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
        </div>
        <div className="item1">
        <img src={Image10} alt="" />
            <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
        </div>
    </div>    
            <div className="last">
                <div className="bottom1">
                    <div className="right">
                        <img src={Image11} alt="" className="j" />
                        <span>
                            Dreaming on <br />
                            NEFFEX
                        </span>
                        <img src={HeartIcon} alt="" className="heart" />
                    </div>
                    <div className="middle">
                        <img src={MusicPlayerOptions} alt="" />
                    </div>
                    <div className="left">
                        <img src={RightOptions} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <p>Listening on Ideapad gaming 3</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;