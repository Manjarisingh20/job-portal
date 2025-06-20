// Pages/Home.jsx
import React from "react";
import HeroSection from "../Components/HeroSection";
import Brands from "../Components/Brands";
import "../App.css";
import RecentJobs from "../Components/RecentJobs";
import BrowseByCategory from "../Components/BrowseByCategory"
import Poster from "../Components/poster"
import Testimonials from "../Components/Testimonials";
import News from "../Components/News";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <div className="app">
        <div className="background">
          <Navbar />
          <HeroSection />
        </div>
        <Brands />
      </div>
      <div className="jobs">
        <RecentJobs />
      </div>
      <div className="category">
        <BrowseByCategory />
      </div>
      <Poster />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
}

export default Home;

 