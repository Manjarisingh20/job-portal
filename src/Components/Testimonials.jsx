import React from "react";
import Slider from "react-slick";
import TestimonialCards from "./common/TestimonialCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container md:justify-center mt-20 pb-16">
      <h1 className="text-3xl md:text-4xl text-center pt-14 font-semibold">
        Testimonials from Our Customers
      </h1>
      <p className="pt-3 text-center text-sm md:text-base md:mb-8">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
      </p>

      
      <div className="hidden xl:flex justify-between items-center gap-4 mt-6">
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>

      
      <div className="xl:hidden mt-6">
        <Slider {...settings}>
          <div>
            <TestimonialCards />
          </div>
          <div>
            <TestimonialCards />
          </div>
          <div>
            <TestimonialCards />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
