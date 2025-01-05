import HomePageHeader from "./HomePageHeader";
import SliderWithSocial from "../MoviePage/SliderWithSocial"; 
import "./HomePage.css";



const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-header-container">
        <HomePageHeader />
      </div>
      <div className="homepage-slider-container">
        <SliderWithSocial />
      </div>
    </div>
  );
};

export default HomePage;
