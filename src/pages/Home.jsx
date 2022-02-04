import React from "react";
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announcements/>
    <Navbar/>
    <Slider/>
    <Categories/>

  </>
  )
};

export default Home;
