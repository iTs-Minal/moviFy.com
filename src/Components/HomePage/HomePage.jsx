import HomePageHeader from "./HomePageHeader";
import "./HomePage.css";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-headercontainer">
        <HomePageHeader />
      </div>
      <div className="film-container">
        <div className="top-film-container">
          <div className="filmSlider-filmItems">
            <div className="filmSlider">
              <div className="displayed-movie">
                <span className="left-arrow">
                  <FaChevronLeft />
                </span>
                <img
                className="displayed-movie-image"
                  src="https://via.placeholder.com/500"
                  alt="placeholderImage 0"
                />
                <h2 className="movie-title">Gladiator II</h2>
                <span className="movie-rating">7.5</span>
                <span className="movie-quality">HD</span>
                <p className="movie-detail">
                  This movie is about a gladiator being the king of rome by
                  fighting some goons that lives in there and he sabotage all
                  the mean necessary i dnt know what the hell i am writting bu
                  it is fun you know to code entire day just sitting on your
                  chair without knowing whne it becomes day and when night it is
                  good feeling you know.
                </p>
                <span className="right-arrow">
                  <FaChevronRight />
                </span>
              </div>
            </div>
            <div className="filmItems">
              <div className="basic-filmitem">
                <div className="filmitem">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="placeholderImage 1"
                  />
                  <h3 className="film-quality">HD</h3>
                  <h4 className="film-title">Superman</h4>
                  <h5 className="imdb-rating">8.3</h5>
                </div>
                <div className="filmitem">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="placeholderImage 2"
                  />
                  <h3 className="film-quality">HD</h3>
                  <h4 className="film-title">Superman</h4>
                  <h5 className="imdb-rating">8.3</h5>
                </div>
                <div className="filmitem">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="placeholderImage 3"
                  />
                  <h3 className="film-quality">HD</h3>
                  <h4 className="film-title">Superman</h4>
                  <h5 className="imdb-rating">8.3</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="additional-text">
            <p>
              Are you looking for the best site for watching movies online? A
              site that is not only free but also safe? If yes, search no more,
              you are at the right place. DopeBox allows users to watch
              thousands of movies and TV shows in HD quality. You are completely
              safe on the site as we do not have any ads or require any
              registration. Although we are free of charge, our quality is on
              the same par with that of paid streaming services. Our content
              library is huge with dozens of thousands of titles and our
              features are excellent. Only on DopeBox can you watch your
              favorite movies seamlessly with no buffering, lagging, redirects,
              and pop ups. We also update new titles on a daily basis so rest
              assured, fun never ends on DopeBox. Your complete satisfaction is
              our ultimate goal; therefore, do not hesitate to contact us should
              you have any issues, inquiries, or requests regarding the site.
            </p>
          </div>
        </div>
        <div className="bottom-film-container">
          <div className="trending"></div>
          <div className="latest-movies"></div>
          <div className="latest-tvshows"></div>
          <div className="upcoming"></div>
        </div>
      </div>
      <div className="homepage-footer">
        <div className="footer-items">
          <ul className="footer-item">
            <li>Android App</li>
            <li>Terms and condition</li>
            <li>Contact</li>
            <li>SiteMap</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-text">
          <p>
            MoviFy.com is a Free Movies streaming site with zero ads. We let you
            watch movies online without having to register or paying, with over
            10000 movies and TV-Series. You can also Download full movies from
            MoviesCloud and watch it later if you want.
          </p>
        </div>
        <div className="copyright-text">
          <h5>© Movify.com</h5>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
