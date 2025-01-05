import "./SliderWithSocial.css";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SliderWithSocial = () => {
  return (
    <div className="filmslider-filmlist-social">
      <div className="filmslider">
        <span className="leftarrow">
          <FaChevronLeft />
        </span>
        <img
          className="sliderimage-placeholder"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
        <div className="filmdetails">
          <h2 className="filmtitle">Movie Title</h2>
          <span className="filmrating">8.3</span>
          <span className="filmquality">HD</span>
          <p className="filmdescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit odit
            est deserunt error magni doloremque dolorum, pariatur, nisi
            consequatur nostrum obcaecati amet consectetur quas suscipit a ea
            temporibus, similique eaque.
          </p>
        </div>
        <span className="rightarrow">
          <FaChevronRight />
        </span>
      </div>
      <div className="filmlist">
        <div className="filmitems">
          <div className="filmitem">
          <img
          className="itemimage-placeholder"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
            <div className="itemdetails">
              <span className="film-rating">8.3</span>
              <span className="film-quality">HD</span>
              <h3 className="film-title">Superman</h3>
              <p className="film-description">Its a movie about Superman.</p>
            </div>
          </div>
          <div className="filmitem">
          <img
          className="itemimage-placeholder"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
            <div className="itemdetails">
              <span className="film-rating">8.3</span>
              <span className="film-quality">HD</span>
              <h3 className="film-title">Superman</h3>
              <p className="film-description">Its a movie about Superman.</p>
            </div>
          </div>
          <div className="filmitem">
          <img
          className="itemimage-placeholder"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
            <div className="itemdetails">
              <span className="film-rating">8.3</span>
              <span className="film-quality">HD</span>
              <h3 className="film-title">Superman</h3>
              <p className="film-description">Its a movie about Superman.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="socialitems">
          <ul className="items">
            <li>
              <span className="twitter-icon">
                <FaSquareXTwitter />
              </span>
              Twitter
            </li>
            <li>
              <span className="insta-icon">
                <FaInstagramSquare />
              </span>
              Instagram
            </li>
            <li>
              <span className="github-icon">
                <FaGithub />
              </span>
              GitHub
            </li>
            <li>
              <span className="linkedin-icon">
                <FaLinkedin />
              </span>
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SliderWithSocial;
