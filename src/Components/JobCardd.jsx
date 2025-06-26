import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { BsBookmarkPlus } from "react-icons/bs";
import Images from "./common/Images";
import Button from "./common/Button";

export default function JobCardd({
  postedTime,
  jobTitle,
  companyName,
  logo,
  buttonLabel
}) {
  const navigate = useNavigate();

  return (

    <div className="relative container p-4 sm:p-6 bg-white rounded-lg ">

      
      <div className="text-xs bg-sidebar-bg p-1 w-fit rounded-lg text-button-bg mb-2">
        {postedTime}
      </div>

      
      <BsBookmarkPlus className="absolute top-4 right-4 text-muted text-2xl" />

      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Images
            src={logo}
            alt="Company Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{jobTitle}</h2>
            <p className="text-sm text-gray-500">{companyName}</p>
          </div>
        </div>
      </div>

      
      <div className="mt-6 flex flex-wrap gap-2">
        <Button className="px-3 py-1 text-sm text-gray-600 rounded-full" label="Commerce" />
        <Button className="px-3 py-1 text-sm text-gray-600 rounded-full" label="Full Time" />
        <Button className="px-3 py-1 text-sm text-gray-600 rounded-full" label="$40000-$42000" />
        <Button className="px-3 py-1 text-sm text-gray-600 rounded-full" label="New-York,USA" />
      </div>

      <div className="mt-6 flex justify-center sm:justify-end">
        <button
          className="w-full sm:w-[300px] py-2 bg-button-bg text-white rounded-md font-semibold text-sm sm:text-base hover:bg-emerald-600 transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
