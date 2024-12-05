import './style.css';
function nav() {
    return(
        <>
        <nav className="sidebar">
            <div className="top">
                <div className="logo">
                    <img src="img/Spotify logo.png" alt="Spotify Logo" />
                </div>
                <div className="center">
                    <a href="" className="imp"><img src="img/Home.png" alt="Home Icon" />
                        <p className="home">Home</p>
                    </a>
                    <a href=""><img src="img/Search.png" alt="Search Icon" />
                        <p className="home">Search</p>
                    </a>
                    <a href=""><img src="img/Your library.png" alt="Your Library Icon" />
                        <p className="home">Your library</p>
                    </a>
                    <hr />
                    <a href=""><img src="img/Create.png" alt="Create Icon" />
                        <p className="home">Create Playlist</p>
                    </a>
                    <a href=""><img src="img/Liked.png" alt="Liked Icon" />
                        <p className="home">Liked Songs</p>
                    </a>
                    <a href=""><img src="img/your episodes.png" alt="Your Episodes Icon" />
                        <p className="home">Your Episodes</p>
                    </a>
                    <hr />
                    <a href=""><p className="Fav">FAV</p></a>
                    <a href=""><p className="Fav">Daily Mix 1</p></a>
                    <a href=""><p className="Fav">Discover Weekly</p></a>
                    <a href=""><p className="Fav">Dance/Electronic Mix</p></a>
                    <a href=""><p className="Fav">EDM/Populer</p></a>
                    <hr />
                    <a href=""><img src="img/grommet-icons_install-option.png" alt="Install App Icon" />
                        <p className="home">Install App</p>
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}