
import "./Trending.css";
import { FaFireAlt } from "react-icons/fa";

const Movie = () => {
  return (
    <div className="trending-container">
      <div className="trending-wrapper1">
       <div className="title">
               <span className="line">|</span>
               <span className="fire-icon">
                 <FaFireAlt />
               </span>
               <h1 className="trending-text">Trending</h1>
             </div>
        <div className="trending-section"></div>
      </div>
    </div>
  );
};

export default Movie;