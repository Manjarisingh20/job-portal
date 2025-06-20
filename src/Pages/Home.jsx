import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Brands from "../Components/Brands";
import "../App.css";
import RecentJobs from "../Components/RecentJobs";
import BrowseByCategory from "../Components/BrowseByCategory"
import Poster from "../Components/poster"
import Testimonials from "../Components/Testimonials";
import News from "../Components/News";
import Footer from "../Components/Footer";

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
      <div>
        <Poster />
      </div>
      <div>
      <Testimonials />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
 