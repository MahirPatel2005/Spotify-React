import './style.css';
import HomeIcon from './assets/Home.png';
import SearchIcon from './assets/Search.png';
import YourLibraryIcon from './assets/Your library.png';
import CreateIcon from './assets/Create.png';
import LikedIcon from './assets/Liked.png';
import YourEpisodesIcon from './assets/your episodes.png';
import InstallAppIcon from './assets/grommet-icons_install-option.png';
import SpotifyLogo from './assets/Spotify logo.png';

function nav() {
    return(
        <>
        <nav className="sidebar">
            <div className="top">
                <div className="logo">
                    <img src={SpotifyLogo} alt="Spotify Logo" />
                </div>
                <div className="center">
                    <a href="" className="imp"><img src={HomeIcon} alt="Home Icon" />
                        <p className="home">Home</p>
                    </a>
                    <a href=""><img src={SearchIcon} alt="Search Icon" />
                        <p className="home">Search</p>
                    </a>
                    <a href=""><img src={YourLibraryIcon} alt="Your Library Icon" />
                        <p className="home">Your library</p>
                    </a>
                    <hr />
                    <a href=""><img src={CreateIcon} alt="Create Icon" />
                        <p className="home">Create Playlist</p>
                    </a>
                    <a href=""><img src={LikedIcon} alt="Liked Icon" />
                        <p className="home">Liked Songs</p>
                    </a>
                    <a href=""><img src={YourEpisodesIcon} alt="Your Episodes Icon" />
                        <p className="home">Your Episodes</p>
                    </a>
                    <hr />
                    <a href=""><p className="Fav">FAV</p></a>
                    <a href=""><p className="Fav">Daily Mix 1</p></a>
                    <a href=""><p className="Fav">Discover Weekly</p></a>
                    <a href=""><p className="Fav">Dance/Electronic Mix</p></a>
                    <a href=""><p className="Fav">EDM/Populer</p></a>
                    <hr />
                    <a href=""><img src={InstallAppIcon} alt="Install App Icon" />
                        <p className="home">Install App</p>
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default nav