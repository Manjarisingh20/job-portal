import React from "react";
import { FaPlay } from "react-icons/fa";
import Images from "./common/Images"; 
import Button from "./common/Button";

const VideoSection = () => {
  return (
    <section className=" hidden md:block container py-12 space-y-10">
      
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
       
        <Images
          src="/Images/bg-video.png"
          alt="Video background"
          className="w-full h-[300px] md:h-[420px] object-cover"
        />

        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
          <div className="bg-button-bg p-4 rounded-full">
            <FaPlay className="text-white text-xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-center leading-snug">
            Good Life Begins With <br /> A Good Company
          </h2>
        </div>

        
        <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white text-xs flex flex-col md:flex-row justify-between items-center px-20 py-4 space-y-2 md:space-y-0">
          <div className="flex">
          <div className="">
            <Button label="1" className="bg-button-bg px-2 py-1"/>
            
          </div>
          <div className="pl-4">
          <h1 className="font-bold text-md">Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit.</h1>
          <Button label="Learn more →" className="pt-2 text-button-bg" />
          </div>
          </div>
          <div className="flex">
          <div className="">
            <Button label="2" className="bg-button-bg px-2 py-1"/>
            
          </div>
          <div className="pl-4">
          <h1 className="font-bold text-md">Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit.</h1>
          <Button label="Learn more →" className="pt-2 text-button-bg" />
          </div>
          </div>
          <div className="flex">
          <div className="">
            <Button label="3" className="bg-button-bg px-2 py-1"/>
            
          </div>
          <div className="pl-4">
          <h1 className="font-bold text-md">Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit.</h1>
          <Button label="Learn more →" className="pt-2 text-button-bg" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
