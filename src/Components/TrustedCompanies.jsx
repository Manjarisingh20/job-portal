import React from "react";
import Images from "./common/Images";

const TrustedCompanies = () => (
  <section className="container hidden md:block  py-16">
    <div className="flex flex-col md:flex-row items-center gap-10">
      
      
      <div className="grid grid-cols-2 gap-4 md:w-1/2">
        <img src="/Images/photo.png" alt="Logo" className="w-full h-full  rounded" />
        <div className="flex flex-col gap-4">
          <img src="/Images/photo.png" alt="Logo" className="w-full h-80  rounded" />
          <img src="/Images/photo.png" alt="Logo" className="w-full h-56  rounded" />
        </div>
      </div>

      
      <div className="md:w-1/2 text-left ">
        <h2 className="text-5xl font-bold mb-4">We’re Only Working With The Best</h2>
        <p className="text-gray-600 text-sm mb-4">
        Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit.
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex">
          <Images src="/Images/premium-quality.png" className=" h-14 w-14 rounded-full"/>
          <span className="pt-3 font-semibold pl-4"> Quality Jobs</span>
          </div>
          <div className="flex">
          <Images src="/Images/resume.png" className=" h-8 mt-2 w-8 "/>
          <span className="pt-3 font-semibold pl-4"> Resume building</span>
          </div>
          <div className="flex">
          <Images src="/Images/badge.png" className=" h-12 w-12 ml-2 rounded-full"/>
          <span className="pt-3 font-semibold pl-4"> Top Companies</span>
          </div>
          <div className="flex">
          <Images src="/Images/brand-image.png" className=" h-10 w-10 mt-1 rounded-full"/>
          <span className="pt-3 font-semibold pl-4"> Top Talents</span>
          </div>
          
        </div>
      </div>
    </div>
  </section>
);

export default TrustedCompanies;
