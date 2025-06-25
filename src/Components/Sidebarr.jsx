import React from 'react';
import {
  FaUser,
  FaClock,
  FaBriefcase,
  FaCalendarAlt,
  FaGraduationCap,
  FaWallet,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Sidebarr() {
  return (
    <div className="bg-sidebar-bg p-5 rounded-xl">
      <h4 className="font-bold text-gray-800 text-lg mb-4">Job Overview</h4>
      <ul className="text-sm text-gray-700 space-y-4">
        <li className="flex items-start gap-2">
          <FaUser className="text-button-bg mt-1" />
          <div>
            <p className="font-semibold">Job Title</p>
            <p>Corporate Solutions Executive</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaClock className="text-emerald-500 mt-1" />
          <div>
            <p className="font-semibold">Job Type</p>
            <p>Full Time</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaBriefcase className="text-emerald-500 mt-1" />
          <div>
            <p className="font-semibold">Category</p>
            <p>Commerce</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaCalendarAlt className="text-emerald-500 mt-1" />
          <div>
            <p className="font-semibold">Experience</p>
            <p>5 Years</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaGraduationCap className="text-emerald-500 mt-1" />
          <div>
            <p className="font-semibold">Degree</p>
            <p>Master</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaWallet className="text-emerald-500 mt-1" />
          <div>
            <p className="font-semibold">Offered Salary</p>
            <p>$40000-$42000</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-emerald-500 mt-1" />
          <div>
            <p className="font-semibold">Location</p>
            <p>New-York, USA</p>
          </div>
        </li>
      </ul>

      <iframe
        title="Job Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0766662705!2d-74.30915022426437!3d40.69667269426109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1750759434494!5m2!1sen!2sin"
        className="mt-4 w-48 h-40 rounded-xl border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      
    </div>
  );
}

export default Sidebarr;
