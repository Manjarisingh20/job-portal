import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section text-white px-4 md:px-10 lg:px-20 py-16 relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight">
        Find Your Dream Job Today!
      </h1>

      <p className="subtitle text-center text-gray-300 mt-4 text-base md:text-lg max-w-2xl mx-auto">
        Connecting Talent with Opportunity: Your Gateway to Career Success
      </p>

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

     
      <div className="mt-12 w-full max-w-5xl mx-auto flex flex-row justify-center sm:justify-between items-center gap-6 sm:gap-14 text-center sm:text-left">
  
  <div className="flex flex-row items-center sm:items-start gap-2">
    <div className="bg-emerald-500 w-10 h-10 sm:w-20 sm:h-20 rounded-full flex justify-center items-center">
      <img src="/Images/briefcase.png" alt="Jobs" className="w-5 h-5 sm:w-7 sm:h-7" />
    </div >
    <div className="flex flex-col"><p className="text-sm sm:text-lg font-bold text-white mt-2">25,850</p>
    <p className="text-xs sm:text-base text-gray-300">Jobs</p></div>
  </div>

  
  <div className="flex flex-row items-center sm:items-start gap-2">
    <div className="bg-emerald-500 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center">
      <img src="/Images/employees.png" alt="Candidates" className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    <div className="flex flex-col"><p className="text-sm sm:text-lg font-bold text-white mt-2">10,250</p>
    <p className="text-xs sm:text-base text-gray-300">Candidates</p></div>
    
  </div>


  <div className="flex flex-row items-center sm:items-start gap-2">
    <div className="bg-emerald-500 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center">
      <img src="/Images/office-building.png" alt="Companies" className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    <div className="flex flex-col"><p className="text-sm sm:text-lg font-bold text-white mt-2">18,400</p>
    <p className="text-xs sm:text-base text-gray-300">Companies</p></div>
    
  </div>
</div>



    </section>
  );
}
