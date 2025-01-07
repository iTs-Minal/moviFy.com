import HomePageHeader from "./HomePageHeader";
import SliderWithSocial from "../MoviePage/SliderWithSocial"; 
import "./HomePage.css";
import Movies from "../MoviePage/MovieSection";
import Footer from "./Footer";



const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-header-container">
        <HomePageHeader />
      </div>
      <div className="homepage-slider-container">
        <SliderWithSocial />
      </div>
      <div className="movies-wrapper">
        <Movies/>
      </div>
      <div className="hompage-footer">
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
