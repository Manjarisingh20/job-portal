import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { BsSearch } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import Input from "./common/Input";


function valuetext(value) {
  return `$${value}K`;
}

export default function Sidebar() {
  const [value, setValue] = useState([40, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container xl:pt-14 ">

      <div>
      <div className="rounded-2xl bg-sidebar-bg p-4">

<h2 className="text-md font-bold mb-3 leading-none">Search by Job Title</h2>
<div className="relative mb-4">
  <BsSearch className="absolute left-3 top-1/2  transform -translate-y-1/2 text-gray-400" />
  <Input 

    type="text"
    placeholder="Job title or company"
    className="pl-10 pr-3 py-2 border rounded w-full text-sm"
  />
</div>

<h1 className="text-md font-bold mb-3 leading-none">Location</h1>
<div className="relative mb-4">
  <BsGeoAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <select className="pl-10 pr-3 text-gray-400 py-2 border rounded w-full text-sm">
    <option>Choose city</option>
    <option>Lucknow</option>
    <option>New York</option>
    <option>Other</option>
  </select>
</div>

  <h3 className="text-lg font-semibold mt-4 mb-3">Category</h3>
  <ul>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        Commerce
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Telecommunications
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        Hotels & Tourism
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        Education
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />
        Financial Services
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
  </ul>

  <button className="bg-button-bg text-white w-full py-2 rounded-lg mt-2 text-sm">
    Show More
  </button>


  <h3 className="text-lg font-semibold mt-4 mb-3">Job Type</h3>
  <ul>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        Full Time
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        Part Time
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        Freelance
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        Seasonal
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
    <Input type="checkbox" />


        Fixed-Price
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
  </ul>


  <h3 className="text-lg font-semibold mt-4 mb-3">Experience Level</h3>
  <ul>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">
        <Input type="checkbox" />

        No-experience
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Fresher
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Intermediate
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Expert
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
  </ul>


  <h3 className="text-lg font-semibold mt-4 mb-3">Date Posted</h3>
  <ul>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        All
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Last Hour
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Last 24 Hours
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Last 7 Days
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
    <li className="flex justify-between items-center px-3 py-1 hover:bg-gray-200 rounded">
      <label className="flex items-center gap-2 text-sm text-gray-800">

        <Input type="checkbox" />

        Last 30 Days
      </label>
      <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm">10</span>
    </li>
  </ul>

  
  <h3 className="text-lg font-semibold mt-4 mb-3 leading-none">Salary</h3>
  <Box sx={{ width: "100%" }}>
    <Slider
      getAriaLabel={() => "Salary range"}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      min={0}
      max={9999}
      sx={{ color: "#16937a" }}
    />
  </Box>
  <div className="flex justify-between items-center text-sm font-medium mt-2">
    <span>Salary: ${value[0]} - ${value[1]}</span>
    <button className="bg-[#16937a] text-white px-3 py-1 rounded">Apply</button>
  </div>

  <h3 className="mt-6 text-sm font-semibold leading-none">Tags</h3>
  <div className="mt-3 flex flex-wrap gap-2 text-sm">
    <span className="px-2 py-1 bg-[#c8e5df] text-[#16937a] rounded-xl">engineering</span>
    <span className="px-2 py-1 bg-[#c8e5df] text-[#16937a] rounded-xl">design</span>
    <span className="px-2 py-1 bg-[#c8e5df] text-[#16937a] rounded-xl">ui/ux</span>
    <span className="px-2 py-1 bg-[#c8e5df] text-[#16937a] rounded-xl">marketing</span>
    <span className="px-2 py-1 bg-[#c8e5df] text-[#16937a] rounded-xl">management</span>
    <span className="px-2 py-1 bg-[#c8e5df] text-[#16937a] rounded-xl">soft</span>
    <span className="px-2 py-1 bg-[#c8e5df] text-[#16937a] rounded-xl">construction</span>
  </div>

  
</div>
      </div>
      <div className="sidebar-poster ">
      <div className=" h-96 mt-5  rounded-xl p-4 text-white flex flex-col bg- items-start">
          <h1 className="text-2xl font-bold mb-2">WE ARE HIRING</h1>
          <p className="font-bold">Apply Today!</p>
        </div>
        </div>
    </div>
  );
}
