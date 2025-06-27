import React from 'react';
import Button from '../../Components/common/Button';
import Images from '../../Components/common/Images';
import Input from '../../Components/common/Input';
import Layoutt from '../../Components/common/Layoutt';

function Verify() {
  return (
    <Layoutt >
      <div className="min-h-screen flex flex-col font-sans px-4">
      <div className="pt-6 flex justify-center gap-2">
        <Images src="/Images/bag.png" alt="logo" className="h-6 w-6" />
        <h1 className="text-xl font-semibold whitespace-nowrap">MyJob</h1>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold mb-2">Email Verification</h1>
          <p className="text-sm text-gray-600 mb-6">
            We've sent a verification to <b>emailaddress@gmail.com</b> to verify your
            <br /> email address and activate your account.
          </p>

          <Input
            type="text"
            placeholder="Verification Code"
            className="border border-gray-300 rounded-md py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
          />

          <Button
            className="bg-button-bg text-white py-2.5 font-semibold mt-4 w-full rounded-sm"
            label="Verify My Account →"
          />

          <div className="mt-4 flex justify-center text-sm">
            <p className="text-gray-500">Didn't receive any code?</p>
            <button className="text-emerald-700 pl-2">Resend Code</button>
          </div>
        </div>
      </div>
    </div>
    </Layoutt>
  );
}

export default Verify;
