import React from "react";

function TestimonialCards() {
  return (
    <div className="bg-white mr-2  gap-4 sm:w-[80%] md:w-[45%] lg:w-[30%] rounded-3xl md:mt-10 mt-2 pl-6 pr-6 pt-4 pb-1 md:pb-4 shadow-md ">
      <div className="flex ml-4 md:ml-9 pt-1 md:pt-9 gap-2">
        <img src="../Images/star.png" alt='star' className="w-4 h-4"></img>
        <img src="../Images/star.png" alt='star' className="w-4 h-4"></img>
        <img src="../Images/star.png" alt='star' className="w-4 h-4"></img>
        <img src="../Images/star.png" alt='star' className="w-4 h-4"></img>
        <img src="../Images/star.png" alt='star' className="w-4 h-4"></img>
      </div>
      <h1 className='mt-6 text-lg font-bold ml-4 md:ml-9'>Amazing services</h1>
      <p className="ml-4 md:ml-9 mt-2 md:mt-6">
        Metus faucibus sed turpis lectus feugiat<br></br>tincidunt.Rhoncus sed
        tristique in dolor.<br></br>Mus etiam et vestibulum venenatis
      </p>
      <img src='../Images/quote.png' alt='quote' className=" ml-60 md:ml-64 mt-1 md:mt-10 w-12 h-12"></img>
      <div className="flex pb-10 ">
      <img src='../Images/happiness.png' alt='happiness' className=" ml-9 w-12 h-12"></img>
      <div className="ml-5 mt-1">
      <h1 className="font-bold">Marco Kim</h1>
      <p >Happy Client</p>
      </div>
      
      </div>
    </div>
  );
}

export default TestimonialCards;
