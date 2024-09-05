const express = require("express");
const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();

router.post("/create", authenticateToken, createBooking);
router.get("/user", authenticateToken, getBookings);

module.exports = router;
