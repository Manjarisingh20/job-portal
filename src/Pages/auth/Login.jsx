import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/common/Button";
import Authstats from "../../Components/common/Authstats";
import Images from "../../Components/common/Images"
import Input from "../../Components/common/Input";
import Layoutt from "../../Components/common/Layoutt";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Layoutt>
      <div className="flex h-screen  font-sans ">
      
      <div className="flex flex-col md:m-52 m-10 xl:m-0 items-center justify-center w-full md:w-1/2 bg-white  py-8 z-10">
        <div className="flex items-center gap-2 mb-6">
          <Images src="/Images/bag.png" alt="logo" className="h-6 w-6" />
          <h1 className="text-xl font-semibold whitespace-nowrap">MyJob</h1>
        </div>

        <div className="w-full max-w-md  items-center justify-center mx-auto pt-10 md:pt-24">
          <h2 className="text-2xl font-bold mb-2">Sign in</h2>
          <p className="text-sm mb-6 text-gray-500">
            Don't have account{" "}
            <button
              className="text-emerald-600 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Create Account
            </button>
          </p>

          <Input
            type="email"
            placeholder="Email address"
            className="border px-6 py-2 rounded-md w-full mt-3"
          />

          <Input
            type="password"
            placeholder="Password"
            className="border px-6  py-2 rounded-md w-full mt-3"
          />

          <div className="flex items-center mt-4 text-sm text-gray-600">
            <Input type="checkbox" className="mr-2 " />
            <p>Remember Me</p>
            <button
              className="text-emerald-600 ml-auto"
              onClick={() => navigate("/forgotpass")}
            >
              Forget password
            </button>
          </div>

          <Button
            className="w-full bg-emerald-600 text-white py-2 mt-6 rounded-md hover:bg-emerald-700 transition"
            onClick={() => navigate("/verify")}
            label="Sign In →"
          />

          <div className="text-center text-gray-400 text-sm my-3">or</div>

          <div className="flex gap-2">
            <button className="border text-xs px-3 py-2 w-1/2 rounded-md flex justify-center items-center">
              <Images
                src="/Images/facebook-app-symbol.png"
                alt="fb"
                className="w-4 h-4 mr-2"
              />
              Sign up with Facebook
            </button>
            <button className="border text-xs px-3 py-2 w-1/2 rounded-md flex justify-center items-center">
              <Images
                src="/Images/search.png"
                alt="google"
                className="w-4 h-4 mr-2"
              />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>

     
      <div className="hidden xl:flex w-1/2 bg-emerald-600 text-white items-center justify-center clip-slant">
        <div className="">
          <h1 className="text-3xl font-medium mb-6 leading-snug">
            Over 1,75,324 candidates <br />
            waiting for good employees.
          </h1>
          <div className="flex gap-10 mt-6">
            <Authstats />
            <Authstats />
            <Authstats />
          </div>
        </div>
      </div>
    </div>
    </Layoutt>
  );
};

export default Login;
