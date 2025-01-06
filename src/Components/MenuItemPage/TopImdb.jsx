
import "./TopImdb.css";
import { FaImdb } from "react-icons/fa";

const Movie = () => {
  return (
    <div className="imdb-container">
      <div className="imdb-wrapper1">
        <div className="title">
          <span className="line">|</span>
          <span className="imdb-icon">
            <FaImdb />
          </span>
          <h1 className="imdb-text">Top IMdB</h1>
        </div>
        <div className="imdb-section"></div>
      </div>
    </div>
  );
};

export default Movie;
