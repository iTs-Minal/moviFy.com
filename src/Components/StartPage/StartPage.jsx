import Header from "./Header";
import movifyMain from "../../assets/movifyMain.png";
import { FiSearch } from "react-icons/fi";
import "./StartPage.css";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="startpage-container">
      <Header />
      <div className="main-items">
        <img src={movifyMain} alt="Main" />
        <h3>MoviFy.com</h3>
      </div>
      <div className="form">
        <form className="search-form">
          <input
            type="text"
            className="movie-input"
            placeholder="Enter movie, Tv shows..."
          />
          <div className="search-icon">
            <span>
              <FiSearch />
            </span>
          </div>
        </form>
        <div className="main-btn">
          <Link to="/home">
            <button className="mainpage-btn">
              View Full Site
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="startpage-text">
        <div>
          <h1>Watch Movies Online Free</h1>
          <p>
            People have many reasons to opt for a free movie site. Many of us
            want to trim unnecessary expenses. Some do not watch movies
            frequently enough to pay for a monthly subscription. And many just
            prefer free entertainment. No matter what your reason is, you should
            stick with safe sites only. There are thousands of free movie sites
            on the Internet but only a few of them are safe. Free sites need ads
            for income while ads can carry viruses and malware. Security is the
            main reason people decide to pay for paid streaming services
            instead. If it has been your headache for a while, we have found you
            the cure: a free site with no ads. Or to be more specific,
            MoviFy.com. With no ads, MoviFy.com poses no risk to both your
            device and identity. The site also boasts a huge collection of
            movies for free streaming, HD quality, fast loading speed, constant
            content updates, and many more outstanding features. A penny saved
            is a penny earned. Earn money effortlessly by watching movies online
            for free at MoviFy.com!
          </p>
        </div>
        <div>
          <h1>What is MoviFy.com?</h1>
          <p>
            MoviFy.com is a new name in the streaming industry. However, its
            content library and features show that every site has a chance to
            stand out, no matter where they are a newbie or a veteran. We have
            spent years learning about the industry as well as users’
            expectations in order to create the best free movie site for the
            movie fan community. MoviFy.com allows users to watch and download
            thousands of movies and TV shows in the best resolution possible
            with no ads. We also provide users with fast loading speed, safe and
            private sources, seamless streaming feature, and many other benefits
            you never expect from a free movie site.
          </p>
        </div>
        <div>
          <h1>Is It Illegal to Use MoviFy.com?</h1>
          <p>
            MoviFy.com is not a legal site as the content for free streaming is
            pirated. However, if you are concerned about criminal or civil
            charges, don’t worry, you are safe. According to copyright
            attorneys, watching movies online is not illegal, but sharing or
            downloading pirated content might cause you troubles with
            authorities. If you insist on downloading videos for later usage
            offline, use a reliable VPN and proceed at your own risk.
          </p>
        </div>
        <div>
          <h1>Is MoviFy.com safe?</h1>
          <p>
            MoviFy.com is as safe as Youtube, Google, and Netflix. Our site is 100%
            ad-free, meaning that there are no ads, pop ups, or commercials on
            the site. Although most ads are safe, some of them might give you
            serious headaches such as identity theft, data loss, or corrupted
            networks. Therefore, it is only wise to stay away from ads
            altogether. As there is no registration or signup required on
            MoviFy.com, you do not need to reveal your information with the site.
            By doing so, you are also safe from information leakage. To sum it
            up, MoviFy.com is one of the safest and most reliable free movie sites
            you can find on the Internet.
          </p>
        </div>
      </div>
    </div>
  );
};
StartPage.propTypes = {
  onHomePage: PropTypes.func.isRequired,
};

export default StartPage;
