
import { MdLiveTv } from "react-icons/md";
import "./TvShow.css";

const Movie = () => {
  return (
    <div className="tvshow-container">
      <div className="tvshow-wrapper1">
        <div className="title">
                <span className="line">|</span>
                <span className="tvshow-icon">
                  <MdLiveTv />
                </span>
                <h1 className="tvshow-text">Latest Tv Shows</h1>
              </div>
        <div className="tvshow-section"></div>
      </div>
    </div>
  );
};

export default Movie;