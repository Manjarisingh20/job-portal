import React from 'react';
import Button from '../../Components/common/Button';
import Images from '../../Components/common/Images';
import Input from '../../Components/common/Input';

function Verify() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 font-sans">
      
      
      <div className="flex items-center justify-center text-center gap-2 mb-6">
        <Images src="/Images/bag.png" alt="logo" className="h-6 w-6" />
        <h1 className="text-xl font-semibold whitespace-nowrap">MyJob</h1>
      </div>

      
      <div className="text-center pt-36">
        <h1 className="text-2xl pb-3">Email Verification</h1>
        <p className="font-extralight text-sm">
          We've sent a verification to <b>emailaddress@gmail.com</b> to verify your
          <br /> email address and activate your account.
        </p>
      </div>

      
      <div className="flex justify-center  mt-8">
        <Input
          type="text"
          placeholder="Verification Code"
          className="border border-gray-300 rounded-md py-2 md:px-32 px-20 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
        />
      </div>
      <Button
  className="bg-button-bg text-white py-2.5 font-semibold mt-4 md:px-36 px-10 rounded-sm"
  
  label="Verify My Account  →"
/>
      
      <div className='flex flex-row mt-4'>
        <p className='text-gray-500'>Didn't recieve any code!</p>
        <p className='text-emerald-700 pl-2 '>Resend Code</p>
      </div>
    </div>
  );
}

export default Verify;
