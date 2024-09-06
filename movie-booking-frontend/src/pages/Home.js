import React from "react";
import Header from "../components/HomePage/Header";
import "../styles/home.scss";
import Footer from "../components/HomePage/Footer";
import "../styles/all.scss";
const Home = () => {
  return (
    <div>
      <div id="container">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
