import React from "react";
import Header from "../components/HomePage/Header";
import "../styles/home.scss";
import Footer from "../components/HomePage/Footer";
import "../styles/all.scss";
import Banner from "../components/HomePage/Banner";
const Home = () => {
  return (
    <div>
      <div id="container">
        <Header />
        <Banner/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
