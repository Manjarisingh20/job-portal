import React from "react";
import Image from "./common/Images";

export default function Brands() {
  const brands = [
    { src: "/Images/spotify.png", alt: "Spotify" },
    { src: "/Images/slack.png", alt: "Slack" },
    { src: "/Images/adobe.png", alt: "Adobe" },
    { src: "/Images/asana.png", alt: "Asana" },
    { src: "/Images/linear.png", alt: "Linear" },
  ];

  return (
    <section className="bg-black py-12 px-4 md:px-20">
      

      <div className="flex flex-wrap justify-center items-center gap-10">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}
