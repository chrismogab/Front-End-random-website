import { React, useEffect, useState } from "react";
import "./WatchMovie.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import { background } from "@chakra-ui/react";
import { FaBlackTie } from "react-icons/fa";
//api key: 1b5936fd
const API_URL = "http://www.omdbapi.com?apikey=1b5936fd";
const movie1 = {
  Title: "The Amazing Spiderman 2 Webb Cut",
  Year: "2021",
  imdbID: "tt18351128",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
};

const WatchMovie = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
    console.log(data.Search);
  };
  //   useEffect(() => {
  //     searchMovies(data.Search);
  //   }, []);
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="WatchMovie">
      <h1 className="myMovies">My Movies</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default WatchMovie;
