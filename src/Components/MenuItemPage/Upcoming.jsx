
import { RiMovie2Fill } from "react-icons/ri";
import "./Upcoming.css";

const Movie = () => {
  return (
    <div className="upcoming-container">
      <div className="upcoming-wrapper1">
        <div className="title">
                <span className="line">|</span>
                <span className="upcoming-icon">
                  <RiMovie2Fill />
                </span>
                <h1 className="upcoming-text">Upcoming</h1>
              </div>
        <div className="upcoming-section"></div>
      </div>
    </div>
  );
};

export default Movie;