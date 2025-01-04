import Header from "./Header";
import movifyMain from "../../assets/movifyMain.png";
import { FiSearch } from "react-icons/fi";
import "./StartPage.css";
import { FaArrowRight } from "react-icons/fa";

const StartPage = () => {
  return (
    <div>
      <Header />

      <div className="main-tems">
        <img src={movifyMain} alt="Main" />
        <h3>MOVIFY.COM</h3>
      </div>
      <div className="form">
        <form className="search-form">
          <input type="text" className="movie-input" placeholder="Enter Movie Name" />
          <div className="search-icon">
            <span>
            <FiSearch />
            </span>
           
          </div>
        </form>
        <div className="main-btn">
          <button className="mainpage-btn">
            View Full Site <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
