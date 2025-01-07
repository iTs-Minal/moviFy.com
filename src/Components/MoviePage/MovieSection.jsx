import "./MovieSection.css";
import { FaFireAlt } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import MovieCard from "./MovieCard";

const Movies = () => {
  return (<>
    {/* Trending Section */}
    <div className="trending-wrapper">
      <div className="trending-title">
        <span className="line">|</span>
        <span className="fire-icon">
          <FaFireAlt />
        </span>
        <h1 className="trending-text">Trending</h1>
      </div>
      <div className="trending-movie-section">
        <div className="movies-in-card">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
      </div>

      {/* Latest Movies Section  */}
      <div className="movie-wrapper">

      <div className="movie-title">
        <span className="line">|</span>
        <span className="movie-icon">
          <BiSolidMoviePlay />
        </span>
        <h1 className="movie-text">Latest Movies</h1>
      </div>
      <div className="movies-movie-section">
      <div className="movies-in-card">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
      </div>

      {/* Tv Show Section  */}
      <div className="tvshow-wrapper">

      <div className="tvshow-title">
        <span className="line">|</span>
        <span className="tvshow-icon">
          <MdLiveTv />
        </span>
        <h1 className="tvshow-text">Latest Tv Shows</h1>
      </div>
      <div className="tvshow-movie-section">
      <div className="movies-in-card">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
      </div>

      {/* Upcoming Section  */}
      <div className="upcoming-wrapper">
      <div className="upcoming-title">
        <span className="line">|</span>
        <span className="upcoming-icon">
          <RiMovie2Fill />
        </span>
        <h1 className="upcoming-text">Upcoming</h1>
      </div>
      <div className="upcoming-movie-section">
      <div className="movies-in-card">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  </>
  );
};

export default Movies;
