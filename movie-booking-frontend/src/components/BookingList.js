import React, { useEffect, useState } from "react";
import { getBookings } from "../services/bookings";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const bookings = await getBookings();
      setBookings(bookings);
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.name} - {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
