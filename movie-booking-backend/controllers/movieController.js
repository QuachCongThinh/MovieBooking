const Movie = require("../models/Movie");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

const addMovie = async (req, res) => {
  const { title, genre, releaseDate } = req.body;
  try {
    const newMovie = new Movie({ title, genre, releaseDate });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genre, releaseDate } = req.body;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, releaseDate },
      { new: true }
    );
    if (!updatedMovie)
      return res.status(404).json({ error: "Movie not found" });
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: "Failed to update movie" });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete movie" });
  }
};

module.exports = { getMovies, addMovie, updateMovie, deleteMovie };
