import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../i18n";
import { useTranslation } from "react-i18next";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("now_showing");
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(6);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("http://localhost:5000/api/movies");
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => movie.category === category);

  const visibleMovies = filteredMovies.slice(0, visibleMoviesCount);

  const handleShowMoreMovies = () => {
    setVisibleMoviesCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="movieList">
      <div className="container">
        <div className="title">
          <h1>{t("Movie")}</h1>
          <div className="category-buttons">
            <a href="#"
              className={`nowShow ${
                category === "now_showing" ? "active" : "inactive"
              }`}
              onClick={(event) => {
                event.preventDefault();
                setCategory("now_showing");
                setVisibleMoviesCount(6);
              }}
            >
              {t("NowShowing")}
            </a>
            <a href="#"
              className={`commingsoon ${
                category === "coming_soon" ? "active" : "inactive"
              }`}
              onClick={(event) => {
                event.preventDefault();
                setCategory("coming_soon");
                setVisibleMoviesCount(6);
              }}
            >
              {t("ComingSoon")}
            </a>
          </div>
        </div>
        <div className="movie-grid">
          {visibleMovies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img
                src={movie.image}
                alt={movie.title}
                className="movie-image"
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
        <div className="more">
          {visibleMoviesCount < filteredMovies.length && (
            <div className="show-more">
              <button onClick={handleShowMoreMovies}>{t("ShowMore")}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
