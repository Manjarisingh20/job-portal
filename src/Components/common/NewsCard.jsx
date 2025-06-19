import React from "react";

function NewsCard() {
  return (
    <div className="  mx-auto mt-10 bg-white rounded-3xl  ">
      
    
      <img
        src="/Images/new.png"
        alt="News"
        className=" h-96 w-[95%] ml-4 object-cover rounded-2xl mb-6"
      />

      
      <p className="text-gray-500 text-sm mb-3 ml-4 ">30 March 2024</p>

      
      <h1 className="text-lg md:text-xl font-bold text-gray-800 ml-4 mb-4">
        Revitalizing Workplace Morale: Innovative Tactics For <br></br>Boosting Employee Engagement in 2024
      </h1>

      
      <div className="flex items-center gap-3">
        <button className="text-emerald-700 ml-4 font-medium hover:underline">
          Read more
        </button>
        <img src="/Images/right-arrow.png" alt="Arrow" className="ml-4 w-5 h-5" />
      </div>
    </div>
  );
}

export default NewsCard;
