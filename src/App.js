import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Brands from "./Components/Brands";
import "./App.css";
import RecentJobs from "./Components/RecentJobs";
import BrowseByCategory from "./Components/BrowseByCategory";

export default function App() {
  return (
    <div>
      <div className="app">
        <Navbar />
        <HeroSection />
        <Brands />
      </div>
      <div className="jobs">
        <RecentJobs />
      </div>
      <div className="category">
        <BrowseByCategory />
      </div>
    </div>
  );
}
