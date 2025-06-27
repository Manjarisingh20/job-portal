import React from 'react';
import Button from '../../Components/common/Button';
import Images from "../../Components/common/Images";
import Input from '../../Components/common/Input';
import Layoutt from '../../Components/common/Layoutt';

function Reset() {
  return (
    <Layoutt >
      <div className="min-h-screen flex flex-col items-center justify-center font-sans">
      <div className="flex items-center justify-center text-center gap-2 mb-6">
        <Images src="/Images/bag.png" alt="logo" className="h-6 w-6" />
        <h1 className="text-xl font-semibold whitespace-nowrap">MyJob</h1>
      </div>

      <div className="text-center pt-12">
        <h1 className="text-2xl pb-3">Reset Password</h1>
        <p className="font-extralight text-sm">
          Duis luctus interdum metus, ut consectetur ante consectetur sed.
          <br />Suspendisse euismod viverra massa sit amet mollis..
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8 w-80"> {/* width same as px-32 = 8rem*4 = 32rem = w-80 */}
        <Input
          type="text"
          placeholder="New Password"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
        />
        <Input
          type="password"
          placeholder="New Password"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
        />
      </div>

      <Button
        className="w-80 bg-emerald-600 text-white py-2 mt-6 rounded-md hover:bg-emerald-700 transition"
        label="Reset Password →"
      />
    </div>
    </Layoutt>

  );
}

export default Reset;
