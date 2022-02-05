import React from "react";
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announcements/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
  </>
  )
};

export default Home;
