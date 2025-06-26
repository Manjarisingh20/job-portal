import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/common/Button";
import Authstats from "../../Components/common/Authstats";
import Images from "../../Components/common/Images";

const Register = () => {
  const navigate = useNavigate();
  return (

    <div className="flex h-screen font-sans">
      
      
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-start px-6 py-8 relative z-10">
        
        
        <div className="flex items-center gap-2  md:ml-32 mb-6">
          <Images src="/Images/bag.png" alt="logo" className="h-6 w-6" />
          <h1 className="text-xl font-semibold whitespace-nowrap">MyJob</h1>
        </div>

        
        <div className="max-w-md mx-auto pt-10 md:pt-28 ">
          <div className="flex flex-row"><h2 className="text-2xl font-bold mb-2">Create account.</h2>
          <select className="md:ml-32  mt-1 px-3 py-1 text-sm border border-gray-300 rounded-md w-32">

          <option>Employers</option>
          <option>Employee</option>
          <option>Other</option>
        </select></div>
          <p className="text-sm mb-6 text-gray-500">
            Already have account? <button className="text-emerald-600 cursor-pointer" onClick={() => navigate("/login")}>Log In</button>
          </p>

          
          <div className="flex gap-2">
            <input type="text" placeholder="Full Name" className="border px-4 py-2 rounded-md w-1/2" />
            <input type="text" placeholder="Username" className="border px-4 py-2 rounded-md w-1/2" />
          </div>
          <input type="email" placeholder="Email address" className="border px-6 py-2 rounded-md w-full mt-3" />
          <input type="password" placeholder="Password" className="border px-6  py-2 rounded-md w-full mt-3" />
          <input type="password" placeholder="Confirm Password" className="border px-6  py-2 rounded-md w-full mt-3" />

          <div className="flex items-center mt-4 text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            I've read and agree with your <span className="text-emerald-600 ml-1 cursor-pointer">Terms of Services</span>
          </div>

        
          <Button
  className="w-full bg-emerald-600 text-white py-2 mt-6 rounded-md hover:bg-emerald-700 transition"
  
  label="Create Account →"
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

export default Register;
