const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  director: { type: String },
  actors: [String],
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
