import React from "react";

export default function Brands() {
  const brands = [
    { src: '/Images/spotify.png', alt: 'Spotify' },
    { src: '/Images/slack.png', alt: 'Slack' },
    { src: '/Images/adobe.png', alt: 'Adobe' },
    { src: '/Images/asana.png', alt: 'Asana' },
    { src: '/Images/linear.png', alt: 'Linear' },
  ];

  return (
    <section className="bg-black py-12 px-4 md:px-20">
      <div className="flex flex-wrap  gap-3">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="w-20 sm:w-24 md:ml-20 md:w-44 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}
