import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/common/Button";
import Authstats from "../../Components/common/Authstats";
import Images from "../../Components/common/Images"

const ForgotPass = () => {
  const navigate = useNavigate();
  return (

    <div className="flex h-screen font-sans">
      
      
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-start px-6 py-8 relative z-10">
        
        
        <div className="flex items-center gap-2  md:ml-32 mb-6">
          <Images src="/Images/bag.png" alt="logo" className="h-6 w-6" />
          <h1 className="text-xl font-semibold whitespace-nowrap">MyJob</h1>
        </div>

        
        <div className="max-w-md mx-auto w-full pt-10 md:pt-28 ">
          <h2 className="text-2xl font-bold mb-4">Forget Password</h2>
          <p className="text-sm mb-1 text-gray-500">
            Go back to <button className="text-emerald-600 cursor-pointer" onClick={() => navigate("/login")}>Sign In</button>
          </p>
          <p className="text-sm mb-6 text-gray-500">
            Don't have account <button className="text-emerald-600 cursor-pointer" onClick={() => navigate("/register")}>Create Account</button>
          </p>

          
          
          <input type="email" placeholder="Email address" className="border px-6 py-2 rounded-md w-full mt-3" />

          
          <Button
  className="w-full bg-emerald-600 text-white py-2 mt-6 rounded-md hover:bg-emerald-700 transition"
  
  label="Reset Password →"
/>


          <div className="text-center text-gray-400 text-sm my-3">or</div>

          <div className="flex gap-2">
            
            <button className="border text-xs px-3 py-2 w-1/2 rounded-md flex justify-center items-center">
              <Images src="/Images/facebook-app-symbol.png" alt="fb" className="w-4 h-4 mr-2" />
              Sign up with Facebook
            </button>
            <button className="border text-xs px-3 py-2 w-1/2 rounded-md flex justify-center items-center">
              <Images src="/Images/search.png" alt="google" className="w-4 h-4 mr-2" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>

      
      <div className="hidden md:block w-1/2  text-white px-20 pt-60 clip-slant">
        <div className="mt-40 pl-10 pt-10">
          <h1 className="text-3xl font-medium mb-4">
            Over 1,75,324 candidates<br />waiting for good employees.
          </h1>
          <div className="flex gap-14 mt-8">
            <Authstats />
            <Authstats />
            <Authstats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;