import React, { useState } from "react";
import "../../styles/home.scss";
import "../../i18n";
import { useTranslation } from "react-i18next";

const SortMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { t } = useTranslation();

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
    setSelectedTheater("");
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div className="sort">
      <div className="sort-movie">
        <div className="selectMovie">
          <select id="movie" value={selectedMovie} onChange={handleMovieChange}>
            <option value="">Chọn phim</option>
            <option value="movie1">Phim 1</option>
            <option value="movie2">Phim 2</option>
            <option value="movie3">Phim 3</option>
          </select>
        </div>

        <div className="selectTheater">
          <select
            id="theater"
            value={selectedTheater}
            onChange={(e) => setSelectedTheater(e.target.value)}
            disabled={!selectedMovie}
          >
            <option value="">Chọn rạp</option>
            <option value="theater1">Rạp 1</option>
            <option value="theater2">Rạp 2</option>
          </select>
        </div>

        <div className="selectDate">
          <select
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            disabled={!selectedTheater}
          >
            <option value="">Chọn ngày</option>
            <option value="2024-09-10">10/09/2024</option>
            <option value="2024-09-11">11/09/2024</option>
          </select>
        </div>

        <div className="selectTime">
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            disabled={!selectedDate}
          >
            <option value="">Chọn suất</option>
            <option value="time1">09:00</option>
            <option value="time2">14:00</option>
          </select>
        </div>

        <button onClick={() => alert("Mua vé nhanh!")}>{t("BuyTicket")}</button>
      </div>
    </div>
  );
};

export default SortMovie;
