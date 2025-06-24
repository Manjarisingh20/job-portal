import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { BsBookmarkPlus } from "react-icons/bs";
import Images from "./common/Images"

export default function JobCardd({
  postedTime,
  jobTitle,
  companyName,
  logo,
  tags = [],
  buttonLabel,
  onButtonClick,
}) {
  const navigate = useNavigate();
  return (
    <div className="relative p-4 sm:p-6 ">
      
      <div className="text-xs  text-gray-400 mb-2">{postedTime}</div>
      <BsBookmarkPlus className="position-absolute top-5 end-8 m-0 text-muted fs-4" />

      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        <div className="flex items-center gap-4">
          <Images
            src={logo}
            alt="Company Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{jobTitle}</h2>
            <p className="text-sm text-gray-500">{companyName}</p>
          </div>
        </div>
      </div>

      
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      
      <div className="mt-6 sm:mt-4 flex justify-center sm:justify-end">
        <button
         onClick={() => navigate("/details")}
          className="px-20 py-2 bg-button-bg text-white sm:px-6 sm:py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-emerald-600 transition"
        
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
