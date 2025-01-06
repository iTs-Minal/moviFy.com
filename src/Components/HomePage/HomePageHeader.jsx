import movifylogo from "../../assets/movifyMain.png";
import { Link } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { FaImdb } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./HomePageHeader.css";

const HomePageHeader = () => {
  const [browseMenu, setBrowseMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleShowSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleBrowseMenu = () => {
    setBrowseMenu(!browseMenu);
  };

  return (
    <>
      <header className="homepage-header">
        <div className="left-section">
          <div className="menu-logo-section">
            <div className="logo-section">
              <img className="logo" src={movifylogo} alt="movify logo" />
            </div>

            <div className="menu-section" onClick={handleBrowseMenu}>
              <FiAlignLeft className="icon-menu" />
              <span className="menu-text">Menu</span>
              <div className={`browsemenu ${browseMenu ? "open" : ""}`}>
                <div className="icon-close" onClick={() => handleBrowseMenu()}>
                  <FaTimes />
                </div>

                {/* Routing the menu elements */}
                <ul className="browsemenu-items">
                  <Link to="/StartPage" onClick={() => setBrowseMenu(false)}>
                    <li className="home">
                      <span className="home-icon">
                        <FaHome />
                      </span>
                      Home
                    </li>
                  </Link>
                  <Link to="/Movie" onClick={() => setBrowseMenu(false)}>
                    <li className="movies">
                      <span className="movies-icon">
                        <BiSolidMoviePlay />
                      </span>
                      Movie
                    </li>
                  </Link>
                  <Link to="/TvShow" onClick={() => setBrowseMenu(false)}>
                    <li className="tvshow">
                      <span className="tvshow-icon">
                        <MdLiveTv />
                      </span>
                      Tv Shows
                    </li>
                  </Link>
                  <Link to="/TopImdb" onClick={() => setBrowseMenu(false)}>
                    <li className="imdb">
                      <span className="imdb-icon">
                        <FaImdb />
                      </span>
                      Top IMdB
                    </li>
                  </Link>
                  <Link to="/Trending" onClick={() => setBrowseMenu(false)}>
                    <li className="trending">
                      <span className="trend-icon">
                        <FaFireAlt />
                      </span>
                      Trending
                    </li>
                  </Link>
                  <Link to="/Upcoming">
                    <li className="upcoming">
                      <span className="up-icon">
                        <RiMovie2Fill />
                      </span>
                      Upcoming
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="search-section">
            <div className="search-content">
              <form className="search-form1">
                <ImSearch
                  className="search-icon1"
                  onClick={handleShowSearchInput}
                />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Enter Kyewords..."
                />
              </form>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="login-section">
            <FaUserAlt className="icon login-icon" />
            <span className="login-text">Login</span>
          </div>
        </div>
      </header>
      {showSearchInput && (
        <div className="smallscreen-searchinput">
          <form className="smallscreen-searchform">
            <input
              type="text"
              className="search-input-small"
              placeholder="Enter Keywords..."
            />
          </form>
        </div>
      )}
    </>
  );
};

export default HomePageHeader;
