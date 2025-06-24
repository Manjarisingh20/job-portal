import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { FaSearch } from "react-icons/fa";

function valuetext(value) {
  return `$${value}K`;
}

export default function Sidebar() {
  const [value, setValue] = useState([40, 100]);

  const handleChange = (event, newValue) => {
  setValue(newValue);
};


  return (
    <div className="hidden md:block w-1/4 pt-14 pl-10">
      <div className="shadow rounded-3xl bg-sidebar-bg p-4">
        {/* Job Title Search */}
        <h2 className="text-md font-bold mb-3">Search by Job Title</h2>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Job title or company"
            className="pl-10 pr-3 py-2 border rounded w-full text-sm"
          />
        </div>

        {/* Location */}
        <h1 className="text-md font-bold mb-3">Location</h1>
        <select className="mb-4 px-3 text-gray-400 py-2 border rounded w-full text-sm">
          <option>Choose city</option>
          <option>Lucknow</option>
          <option>New York</option>
          <option>Other</option>
        </select>

        {/* Category */}
        <h3 className="text-lg font-semibold mb-3">Category</h3>
        <ul>
          {[
            "Commerce",
            "Telecommunications",
            "Hotels & Tourism",
            "Education",
            "Financial Services",
          ].map((cat, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-200"
            >
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input type="checkbox" />
                {cat}
              </label>
              <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full shadow-sm">
                10
              </span>
            </li>
          ))}
        </ul>
        <button className="bg-emerald-500 text-white px-20 py-2 ml-2 rounded-lg mt-2">
          Show More
        </button>

        {/* Job Type */}
        <h3 className="text-lg font-semibold mt-4 mb-3">Job Type</h3>
        <ul>
          {["Full Time", "Part Time", "Freelance", "Seasonal", "Fixed-Price"].map(
            (type, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-200"
              >
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" />
                  {type}
                </label>
                <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full shadow-sm">
                  10
                </span>
              </li>
            )
          )}
        </ul>

        {/* Experience */}
        <h3 className="text-lg font-semibold mt-4 mb-3">Experience Level</h3>
        <ul>
          {["No-experience", "Fresher", "Intermediate", "Expert"].map(
            (exp, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-200"
              >
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" />
                  {exp}
                </label>
                <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full shadow-sm">
                  10
                </span>
              </li>
            )
          )}
        </ul>

        {/* Date Posted */}
        <h3 className="text-lg font-semibold mt-4 mb-3">Date Posted</h3>
        <ul>
          {["All", "Last Hour", "Last 24 Hours", "Last 7 Days", "Last 30 Days"].map(
            (date, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-200"
              >
                <label className="flex items-center gap-2 text-sm text-gray-800">
                  <input type="checkbox" />
                  {date}
                </label>
                <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full shadow-sm">
                  10
                </span>
              </li>
            )
          )}
        </ul>

        {/* Salary Range */}
        <h3 className="text-lg font-semibold mt-4 mb-3">Salary </h3>
        <Box sx={{ width: "100%" }}>
          <Slider
            getAriaLabel={() => "Salary range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={9999}
          />
        </Box>

        {/* Tags */}
        <h3 className="mt-4 text-lg font-semibold">Tags</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          {[
            "engineering",
            "design",
            "ui/ux",
            "marketing",
            "management",
            "soft",
            "construction",
          ].map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Promotional Box */}
      <div className="bg-gray-500 h-96 mt-3 rounded-xl pl-4 pt-3 w-30">
        <h1 className="text-white text-2xl font-bold">WE ARE HIRING</h1>
        <p className="text-white font-bold">Apply Today!</p>
      </div>
    </div>
  );
}
