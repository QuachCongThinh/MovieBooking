const express = require("express");
const {
  addMovie,
  updateMovie,
  deleteMovie,
  getMovies,
} = require("../controllers/movieController");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();

router.post("/add", authenticateToken, addMovie);
router.put("/update/:id", authenticateToken, updateMovie);
router.delete("/delete/:id", authenticateToken, deleteMovie);
router.get("/", authenticateToken, getMovies);

module.exports = router;
