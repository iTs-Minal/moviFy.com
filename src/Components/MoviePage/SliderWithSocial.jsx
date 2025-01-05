import "./SliderWithSocial.css";
import johnwick4 from "../../assets/johnwick4.jpg";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const SliderWithSocial = () => {
  return (
    <>
      <div className="filmslider-filmlist-social">
        <div className="filmslider">
          <span className="leftarrow">
            <FaChevronLeft />
          </span>
          <img
            className="sliderimage-placeholder"
            src={johnwick4}
            alt="placeholder"
          />
          <div className="filmdetails">
            <h2 className="filmtitle">John Wick 4</h2>
            <span className="filmrating">
              <span className="star">
                <FaStar />
              </span>
              8.3
            </span>
            <span className="filmquality">HD</span>
            <p className="filmdescription">
              This movie is about a man who avenge the people who killed his dog
              which was given to him by her wife. And now he have started a
              revenge arc of his life in this process he faces great
              difficulty...
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
                <span className="film-rating">
                  <span className="star">
                    <FaStar />
                  </span>
                  8.3
                </span>
                <span className="film-quality">HD</span>
                <h3 className="film-title">Superman</h3>
                <p className="film-description">
                  Its a movie about Superman and his brave deeds of saving
                  humanity.
                </p>
              </div>
            </div>
            <div className="filmitem">
              <img
                className="itemimage-placeholder"
                src="https://via.placeholder.com/150"
                alt="placeholder"
              />
              <div className="itemdetails">
                <span className="film-rating">
                  <span className="star">
                    <FaStar />
                  </span>
                  8.3
                </span>
                <span className="film-quality">HD</span>
                <h3 className="film-title">Superman</h3>
                <p className="film-description">
                  Its a movie about Superman and his brave deeds of saving
                  humanity.
                </p>
              </div>
            </div>
            <div className="filmitem">
              <img
                className="itemimage-placeholder"
                src="https://via.placeholder.com/150"
                alt="placeholder"
              />
              <div className="itemdetails">
                <span className="film-rating">
                  <span className="star">
                    <FaStar />
                  </span>
                  8.3
                </span>
                <span className="film-quality">HD</span>
                <h3 className="film-title">Superman</h3>
                <p className="film-description">
                  Its a movie about Superman and his brave deeds of saving
                  humanity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="socialitems">
            <ul className="items">
              <li className="item">
                <span className="twitter-icon">
                  <FaSquareXTwitter />
                </span>
                Twitter
              </li>
              <li className="item">
                <span className="insta-icon">
                  <FaInstagramSquare />
                </span>
                Instagram
              </li>
              <li className="item">
                <span className="github-icon">
                  <FaGithub />
                </span>
                GitHub
              </li>
              <li className="item">
                <span className="linkedin-icon">
                  <FaLinkedin />
                </span>
                LinkedIn
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="introduction-text">
        <p className="intro">
          Are you looking for the best site for watching movies online? A site
          that is not only free but also safe? If yes, search no more, you are
          at the right place. MoviFy.com allows users to watch thousands of
          movies and TV shows in HD quality. You are completely safe on the site
          as we do not have any ads or require any registration. Although we are
          free of charge, our quality is on the same par with that of paid
          streaming services. Our content library is huge with dozens of
          thousands of titles and our features are excellent. Only on MoviFy.com
          can you watch your favorite movies seamlessly with no buffering,
          lagging, redirects, and pop ups. We also update new titles on a daily
          basis so rest assured, fun never ends on MoviFy.com. Your complete
          satisfaction is our ultimate goal; therefore, do not hesitate to
          contact us should you have any issues, inquiries, or requests
          regarding the site.
        </p>
      </div>
    </>
  );
};

export default SliderWithSocial;
