import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section text-white px-4 md:px-10 lg:px-20 py-16 relative z-10">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight">
        Find Your Dream Job Today!
      </h1>

      {/* Subtitle */}
      <p className="subtitle text-center text-gray-300 mt-4 text-base md:text-lg max-w-2xl mx-auto">
        Connecting Talent with Opportunity: Your Gateway to Career Success
      </p>

      {/* Search Bar */}
      <div className="search-bar mt-10 mx-auto max-w-4xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Job Title or Company"
          className="flex-1 px-5 py-4 text-black text-base"
        />
        <select className="flex-1 px-5 py-4 text-black text-base">
          <option>Select Location</option>
          <option>New York</option>
          <option>San Francisco</option>
          <option>Remote</option>
        </select>
        <select className="flex-1 px-5 py-4 text-black text-base">
          <option>Select Category</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>
        <button className="search-btn px-6 py-4 text-white bg-emerald-500 hover:bg-emerald-600 transition">
          <img
            src="/Images/magnifying-glass.png"
            alt="Search Icon"
            className="inline-block w-4 h-4 mr-2"
          />
          Search Job
        </button>
      </div>

      {/* Stats */}
      <div className="stats mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Jobs */}
        <div className="stat-item text-center">
          <div className="stat-icon bg-emerald-500 p-4 rounded-full inline-flex justify-center items-center">
            <img src="/Images/briefcase.png" alt="Jobs" className="w-6 h-6" />
          </div>
          <p className="mt-3 text-lg font-semibold">25,850 <br></br>Jobs</p>
        </div>

        {/* Candidates */}
        <div className="stat-item text-center">
          <div className="stat-icon bg-emerald-500 p-4 rounded-full inline-flex justify-center items-center">
            <img src="/Images/employees.png" alt="Candidates" className="w-6 h-6" />
          </div>
          <p className="mt-3 text-lg font-semibold">10,250 <br></br>Candidates</p>
        </div>

        
        <div className="stat-item text-center">
          <div className="stat-icon bg-emerald-500 p-4 rounded-full inline-flex justify-center items-center">
            <img src="/Images/office-building.png" alt="Companies" className="w-6 h-6" />
          </div>
          <p className="mt-3 text-lg font-semibold">18,400 <br></br>Companies</p>
        </div>
      </div>
    </section>
  );
}
