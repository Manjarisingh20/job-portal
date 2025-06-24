import React from 'react';
import Button from '../../Components/common/Button';
import Images from "../../Components/common/Images";

function Reset() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 font-sans">
      
      
      <div className="flex items-center justify-center text-center gap-2 mb-6">
        <Images src="/Images/bag.png" alt="logo" className="h-6 w-6" />
        <h1 className="text-xl font-semibold whitespace-nowrap">MyJob</h1>
      </div>

      
      <div className="text-center pt-36">
        <h1 className="text-2xl pb-3">Reset Password</h1>
        <p className="font-extralight text-sm">
          Duis luctus interdum metus, ut consectetur ante consectetur sed.
          <br />Suspendisse euismod viverra massa sit amet mollis..
        </p>
      </div>

      
      <div className="flex flex-col gap-3 justify-center  mt-8">
        <input
          type="text"
          placeholder="New Password"
          className="border border-gray-300 rounded-md py-2 md:px-32 px-20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
        />
        <input
          type="text"
          placeholder="New Password"
          className="border border-gray-300 rounded-md py-2 md:px-32 px-20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
        />
      </div>
      <Button
  className="w-full bg-emerald-600 text-white py-2 mt-6 rounded-md hover:bg-emerald-700 transition"
  
  label="Reset Password →"
/>
      
    </div>
  );
}

export default Reset;
