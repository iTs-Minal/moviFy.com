import { BiSolidMoviePlay } from "react-icons/bi";
import "./Movie.css";
import MovieCard from "../MoviePage/MovieCard";

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
        <div className="movie-section">
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
    </div>
  );
};

export default Movie;
