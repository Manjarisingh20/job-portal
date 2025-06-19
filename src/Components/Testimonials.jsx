import React from 'react';
import TestimonialCards from './common/TestimonialCards';

function Testimonials() {
  return (
    <div className="bg-emerald-100 mt-20 pb-16 px-4 md:px-12">
      <h1 className="text-3xl md:text-4xl text-center pt-14 font-semibold">
        Testimonials from Our Customers
      </h1>
      <p className=" pt-3 text-center text-sm md:text-base max-w-2xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>
    </div>
  );
}

export default Testimonials;

