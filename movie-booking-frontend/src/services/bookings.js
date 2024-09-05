import axios from "axios";

export const createBooking = async (bookingData) => {
  const response = await axios.post("/api/bookings", bookingData);
  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get("/api/bookings");
  return response.data;
};
