import movifylogo from "../../assets/movifyMain.png";
import { FiAlignLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaImdb } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
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
                <ul className="browsemenu-items">
                  <li className="home">
                    <span className="home-icon">
                      <FaHome />
                    </span>
                    Home
                  </li>
                  <li className="movies">
                    <span className="movies-icon">
                      <BiSolidMoviePlay />
                    </span>
                    Movies
                  </li>
                  <li className="tvshow">
                    <span className="tvshow-icon">
                      <MdLiveTv />
                    </span>
                    TV Shows
                  </li>
                  <li className="imdb">
                    <span className="imdb-icon">
                      <FaImdb />
                    </span>
                    Top IMdB
                  </li>
                  <li className="trending">
                    <span className="trend-icon">
                      <FaFireAlt />
                    </span>
                    Trending
                  </li>
                  <li className="upcoming">
                    <span className="up-icon">
                      <RiMovie2Fill />
                    </span>
                    Upcoming
                  </li>
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
