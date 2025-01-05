import { useState } from "react";
import movifyLogo from "../../assets/movifyMain.png";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="page-header">
      <div className="logo">
        <img src={movifyLogo} alt="MoviFy" />
      </div>
      <div className={`navbar-items ${menuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <ul className="items">
          <li className="home">Home</li>
          <li className="movies">Movies</li>
          <li className="tv-shows">TV Shows</li>
          <li className="top-imdb">Top IMdB</li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
