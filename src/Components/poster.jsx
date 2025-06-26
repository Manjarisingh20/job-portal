import React from 'react';
import Stats from './common/Stats';

function Poster() {
  return (
    <div className="bg-white container mx-auto ">
      
      <div className="flex flex-col   lg:flex-row mt-10 gap-10  py-16">
        
        
        <div className="w-full lg:w-1/2">
          <img
            src="/Images/poster.png"
            alt="Poster"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        
        <div className="w-full lg:w-1/2 ">
        <div className="">
  <h1 className="text-3xl md:text-5xl md:text-left sm:text-center font-bold md:mt-28 text-gray-800 leading-tight">
    Good Life Begins With A Good Company
  </h1>
  <p className="mt-6 text-gray-600 text-sm   md:text-base leading-relaxed">
    Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices puris diam egestas amet faucibus tempor blandit. 
    Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus...
  </p>
</div>

          <div className="mt-8  flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold">
              Search Job
            </button>
            <button className="text-emerald-500 underline font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10 md:gap-20 py-12 ">
  <Stats />
  <Stats />
  <Stats />
</div>


      
      <div className="bg-gray-800 text-white rounded-2xl  mt-14   p-8 md:p-16 text-left">
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
