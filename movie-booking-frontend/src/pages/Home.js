import React from "react";
import Header from "../components/HomePage/Header";
import "../styles/home.scss";
import Footer from "../components/HomePage/Footer";
import "../styles/all.scss";
import Banner from "../components/HomePage/Banner";
import SortMovie from "../components/HomePage/SortMovie";
import MovieList from "../components/HomePage/MovieList";

const Home = () => {
  return (
    <div>
      <div id="container">
        <Header />
        <Banner />
        <SortMovie />
        <MovieList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
