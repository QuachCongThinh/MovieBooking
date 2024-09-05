import React, { useState } from "react";
import { createBooking } from "../services/bookings";

const BookingForm = ({ movieId }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { name, date, seats, movieId };
    await createBooking(bookingData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />
      <button type="submit">{t("BookTicket")}</button>
    </form>
  );
};

export default BookingForm;
