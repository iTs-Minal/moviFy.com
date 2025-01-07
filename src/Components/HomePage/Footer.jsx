import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import MovifyMain from "../../assets/movifyMain.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top-items">
        <div className="left-footer">
          <div className="footer-img">
            <img src={MovifyMain} alt="Footer Logo" />
          </div>
        </div>
        <div className="right-footer">
          <div className="footer-menu-items">
            <ul className="fmenuitems">
              <Link to="/startpage" ><li>Home</li></Link>
              <Link to="/TvShow"><li>Tv Show</li></Link>
              <Link to="/Movie"><li>Movies</li></Link>
              <Link to="/TopImdb"><li>Top IMdB</li></Link>
              <Link to="/Trending"><li>Trending</li></Link>
              <Link to="/Upcoming"><li>Upcoming</li></Link>
            </ul>
          </div>
          <div className="footer-main-items">
            <ul className="fmainitems">
              <li>Android App</li>
              <li>Terms of Service</li>
              <li>Contact</li>
              <li>Site Map</li>
              <li>FAQ</li>
              <a href="/home"><li>Go To Top</li></a>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-items">
        <div className="footer-text">
          <p className="ftext">
            MoviFy.com is a Free Movies streaming site with zero ads. We let you
            watch movies online without having to register or paying, with over
            10000 movies and TV-Series. You can also Download full movies from
            MoviesCloud and watch it later if you want.
          </p>
        </div>
        <div className="social-details">
          <ul className="socialitems">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="copyright">© 2024 Copyright: MoviFy.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
