import React from 'react';
import Button from './common/Button';
import Stats from './common/Stats';

const handleJobClick = () => {
  alert("Opening job details...");
};

function Poster() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-12 bg-white gap-10">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/Images/poster.png"
            alt="Poster"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-1/2 lg:pl-20 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            Good Life Begins With A Good Company
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-4">
            Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices puris diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus un euismod feugiat euismod volutpat...
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-xl">Search Job</button>
            <button className="text-emerald-500 underline">Learn More</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white gap-8 md:gap-16 px-4 py-10">
        <Stats />
        <Stats />
        <Stats />
      </div>

      {/* Call to Action Section */}
      <div className="bg-slate-600 text-white rounded-xl mx-4 md:mx-12 mt-16 p-8 md:p-16 text-left">

        <h1 className="text-3xl md:text-5xl font-semibold">
          Create a Better <br className="hidden md:block" /> Future For Yourself
        </h1>
        <p className="pt-6 text-sm md:text-base">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
          <br className="hidden md:block" /> Blandit a massa elementum id scelerisque rhoncus...
        </p>
        <button className="bg-emerald-500 text-white px-6 py-2 rounded-xl mt-10">
          Search Job
        </button>
      </div>
    </div>
  );
}

export default Poster;
