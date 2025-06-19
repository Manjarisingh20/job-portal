import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Find Your Dream Job Today!</h1>
      <p className="subtitle">
        Connecting Talent with Opportunity: Your Gateway to Career Success
      </p>

      <div className="search-bar">
        <input type="text" placeholder="Job Title or Company" />
        <select>
          <option>Select Location</option>
          <option>New York</option>
          <option>San Francisco</option>
          <option>Remote</option>
        </select>
        <select>
          <option>Select Category</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>
        <button className="search-btn">
          <img
            src='/Images/magnifying-glass.png'
            alt="Search Icon"
            className="inline-block w-4 h-4 mr-2"
          />
          Search Job
        </button>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon">
            <img
              src='/Images/briefcase.png'
              alt="Jobs Icon"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <div>
            <strong>25,850</strong> <br />
            Jobs
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <img
              src='/Images/employees.png'
              alt="Candidates Icon"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <div>
            <strong>10,250</strong> <br />
            Candidates
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <img
              src='/Images/office-building.png'
              alt="Companies Icon"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <div>
            <strong>18,400</strong> <br />
            Companies
          </div>
        </div>
      </div>
    </section>
  );
}
