import React from "react";

function TestimonialCards() {
  return (
    <div className="bg-white mr-2 gap-4 sm:w-[80%] md:w-[45%] lg:w-[30%] rounded-3xl mt-10 p-4 shadow-md ">
      <div className="flex ml-9 pt-9 gap-2">
        <img src="../Images/star.png" className="w-4 h-4"></img>
        <img src="../Images/star.png" className="w-4 h-4"></img>
        <img src="../Images/star.png" className="w-4 h-4"></img>
        <img src="../Images/star.png" className="w-4 h-4"></img>
        <img src="../Images/star.png" className="w-4 h-4"></img>
      </div>
      <h1 className='mt-6 text-lg font-bold ml-9'>Amazing services</h1>
      <p className="ml-9 mt-6">
        Metus faucibus sed turpis lectus feugiat<br></br>tincidunt.Rhoncus sed
        tristique in dolor.<br></br>Mus etiam et vestibulum venenatis
      </p>
      <img src='../Images/quote.png' className=" ml-64 mt-10 w-12 h-12"></img>
      <div className="flex pb-10 ">
      <img src='../Images/happiness.png' className=" ml-9 w-12 h-12"></img>
      <div className="ml-5 mt-1">
      <h1 className="font-bold">Marco Kim</h1>
      <p >Happy Client</p>
      </div>
      
      </div>
    </div>
  );
}

export default TestimonialCards;
