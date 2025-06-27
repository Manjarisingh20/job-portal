import React from 'react';
import TestimonialCards from './common/TestimonialCards';

function Testimonials() {
  return (
    <div className=" container mt-20 pb-16 ">
      <h1 className="text-3xl md:text-4xl text-center pt-14 font-semibold">
        Testimonials from Our Customers
      </h1>
      <p className=" pt-3 text-center text-sm md:text-base md:mb-8  ">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center  gap-0 ">
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>
    </div>
  );
}

export default Testimonials;

