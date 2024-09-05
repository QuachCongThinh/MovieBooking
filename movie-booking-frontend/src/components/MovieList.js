import React, { useEffect, useState } from "react";
import { getMovies } from "../services/movies";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  return (
    <div id="container">
      <ul>
        {movies?.map((movie) => (
          <li key={movie._id}>
            {movie.title} - {movie.genre} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
