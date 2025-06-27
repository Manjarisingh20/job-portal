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
    <section className=" container  py-12 ">
      <div className="flex justify-between flex-wrap ">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="w-16  md:w-32 xl:w-44 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}
