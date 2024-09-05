const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    date: { type: Date, required: true },
    seat: { type: String, required: true },
    paymentStatus: { type: String, default: 'Pending' },
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
