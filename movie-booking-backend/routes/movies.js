const express = require("express");
const router = express.Router();
const movies = [
  {
    id: 1,
    title: "Phim 1",
    category: "now_showing",
    image: "/assets/250x400.png",
  },
  { id: 2, title: "Phim 2", category: "coming_soon" },
  { id: 3, title: "Phim 3", category: "now_showing" },
  { id: 4, title: "Phim 4", category: "coming_soon" },
  { id: 5, title: "Phim 5", category: "now_showing" },
  { id: 6, title: "Phim 6", category: "now_showing" },
  { id: 7, title: "Phim 7", category: "coming_soon" },
  { id: 8, title: "Phim 8", category: "now_showing" },
  { id: 9, title: "Phim 9", category: "coming_soon" },
  { id: 10, title: "Phim 10", category: "now_showing" },
  { id: 11, title: "Phim 11", category: "now_showing" },
  { id: 12, title: "Phim 12", category: "coming_soon" },
  { id: 13, title: "Phim 13", category: "now_showing" },
  { id: 14, title: "Phim 14", category: "coming_soon" },
  { id: 15, title: "Phim 15", category: "now_showing" },
  { id: 16, title: "Phim 16", category: "now_showing" },
  { id: 17, title: "Phim 17", category: "coming_soon" },
  { id: 18, title: "Phim 18", category: "now_showing" },
  { id: 19, title: "Phim 19", category: "coming_soon" },
  { id: 20, title: "Phim 20", category: "now_showing" },
];

// GET movies
router.get("/", (req, res) => {
  res.json(movies);
});

module.exports = router;
