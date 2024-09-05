const Movie = require("../models/Movie");

const addMovie = async (req, res) => {
  const { title, genre, year } = req.body;
  try {
    const movie = new Movie({ title, genre, year });
    await movie.save();
    res.status(201).json({ message: "Movie added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genre, year } = req.body;
  try {
    const movie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, year },
      { new: true }
    );
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json({ message: "Movie updated successfully", movie });
  } catch (error) {
    res.status(500).json({ error: "Failed to update movie" });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete movie" });
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

module.exports = { addMovie, updateMovie, deleteMovie, getMovies };
