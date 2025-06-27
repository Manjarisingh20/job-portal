import React from "react";
import Images from './Images';

function TestimonialCards() {
  return (
    <div className="bg-white w-full sm:w-[80%] md:w-[60%] lg:w-[30%] rounded-3xl mt-6 md:mt-10 p-6 shadow-md mx-auto md:mx-0">
      
      <div className="flex justify-start gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Images key={i} src="/Images/star.png" alt="star" className="w-4 h-4" />
        ))}
      </div>

      <h1 className="text-lg font-bold mb-2 text-center md:text-left">Amazing services</h1>
      
      <p className="text-sm text-gray-600 leading-relaxed text-center md:text-left">
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique 
        in dolor. Mus etiam et vestibulum venenatis.
      </p>

      <div className="flex justify-end mt-4">
        <Images src="/Images/quote.png" alt="quote" className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      <div className="flex items-center gap-4 mt-6">
        <Images src="/Images/happiness.png" alt="client" className="w-12 h-12 rounded-full" />
        <div>
          <h1 className="font-bold">Marco Kim</h1>
          <p className="text-sm text-gray-500">Happy Client</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
