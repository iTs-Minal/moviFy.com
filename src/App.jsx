// import { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import StartPage from "./Components/StartPage/StartPage";
import Movie from "./Components/MenuItemPage/Movie";
import TvShow from "./Components/MenuItemPage/TvShow";
import TopImdb from "./Components/MenuItemPage/TopImdb";
import Trending from "./Components/MenuItemPage/Trending";
import Upcoming from "./Components/MenuItemPage/Upcoming";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePageHeader from "./Components/HomePage/HomePageHeader";

const App = () => {
  // const [atHomePage, setAtHomePage] = useState(false);

  // const handleAtHomePage = () => {
  //   setAtHomePage(true);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/startpage" />} />
          <Route path="/startpage" element={<StartPage />} />
          <Route
            path="/home"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/movie"
            element={
              <>
                <HomePageHeader /> <Movie />
              </>
            }
          />
          <Route
            path="/tvshow"
            element={
              <>
                <HomePageHeader /> <TvShow />
              </>
            }
          />
          <Route
            path="/topimdb"
            element={
              <>
                <HomePageHeader /> <TopImdb />
              </>
            }
          />
          <Route
            path="/trending"
            element={
              <>
                <HomePageHeader /> <Trending />
              </>
            }
          />
          <Route
            path="/upcoming"
            element={
              <>
                <HomePageHeader /> <Upcoming />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
