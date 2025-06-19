import React from 'react';
import Stats from './common/Stats';

function Poster() {
  return (
    <div className="bg-white">
      {/* 🎯 Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-12 py-16">
        
        {/* 🖼 Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/Images/poster.png"
            alt="Poster"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* 📄 Right Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Good Life Begins With A Good Company
          </h1>
          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices puris diam egestas amet faucibus tempor blandit. 
            Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus...
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold">
              Search Job
            </button>
            <button className="text-emerald-500 underline font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* 📊 Stats Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10 md:gap-20 py-12 px-6 md:px-20">
        <Stats />
        <Stats />
        <Stats />
      </div>

      {/* ✅ CTA Banner Section */}
      <div className="bg-gray-800 text-white rounded-2xl mx-4 md:mx-20 my-16 p-8 md:p-16 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">
          Create a Better <br className="hidden md:block" /> Future For Yourself
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-300">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
          <br className="hidden md:block" />
          Blandit a massa elementum id scelerisque rhoncus...
        </p>
        <button className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold">
          Search Job
        </button>
      </div>
    </div>
  );
}

export default Poster;
