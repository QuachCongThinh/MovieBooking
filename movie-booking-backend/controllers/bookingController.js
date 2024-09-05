const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  const { movieId, userId, seatNumber } = req.body;
  try {
    const booking = new Booking({ movieId, userId, seatNumber });
    await booking.save();
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};

const getBookings = async (req, res) => {
  const userId = req.user.userId;
  try {
    const bookings = await Booking.find({ userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

module.exports = { createBooking, getBookings };
