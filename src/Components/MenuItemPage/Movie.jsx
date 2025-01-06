import { BiSolidMoviePlay } from "react-icons/bi";
import "./Movie.css";

const Movie = () => {
  return (
    <div className="movie-container">
      <div className="movie-wrapper1">
        <div className="title">
          <span className="line">|</span>
          <span className="movie-icon">
            <BiSolidMoviePlay />
          </span>
          <h1 className="movie-text">Latest Movies</h1>
        </div>
        <div className="movie-section"></div>
      </div>
    </div>
  );
};

export default Movie;
