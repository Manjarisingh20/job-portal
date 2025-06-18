import React from "react";
import briefcase from "../Icons/briefcase.png";
import employees from "../Icons/employees.png";
import officeBuilding from "../Icons/office-building.png";
import magnifyingGlass from "../Icons/magnifying-glass.png";

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
            src={magnifyingGlass}
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
              src={briefcase}
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
              src={employees}
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
              src={officeBuilding}
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
