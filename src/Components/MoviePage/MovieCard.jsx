import { motion } from "framer-motion";
import "./MovieCard.css";
import { FaStar } from "react-icons/fa";
// import johnwick4 from "../../assets/johnwick4.jpg";

const MovieCard = () => {
  return (
    <motion.div className="card" whileHover={{ zIndex: 1 }}>
      <motion.img
        src="https://via.placeholder.com/300"
        alt="movie-title"
        className="card-poster"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ opacity: 0.3, filter: "blur(5px)" }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="card-details"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3>John Wick 4</h3>
        <p className="genre"><span className="genre-span">Genre:</span> Action, Drama</p>
        <p className="rating">
        <span className="rating-span">Rating:</span>
          <span className="star">
            <FaStar />
          </span>
          8.3
        </p>
        <p className="date"><span className="date-span">Release Date:</span> 2023</p>
        <p className="detail">
        <span className="detail-span">Detail:</span> This movie is about a man who avenge the people who killed
          his dog which was given to him by her wife. And now he have started a
          revenge arc of his life in this process he faces great difficulty...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;
