import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white  px-6 py-16">
      <div className="max-w-7xl    mx-auto">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:ml-14  lg:grid-cols-4 gap-12 text-left sm:text-left">
          
          
          <div>
            <div className="flex items-center justify-center ">
              <img src="/Images/mainicon.png" alt="logo" className="w-6 h-6" />
              <h1 className="text-xl ml-3 font-bold">Job Portal</h1>
            </div>
            <p className="text-sm mt-6 text-center justify-center md:justify-start text-gray-300">
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris...
            </p>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center justify-center md:justify-start">Company</h2>
            <ul className="space-y-2 text-sm text-center justify-center md:justify-start text-gray-300">
              <li><button className="hover:underline">About Us</button></li>
              <li><button className="hover:underline">Our Team</button></li>
              <li><button className="hover:underline">Partners</button></li>
              <li><button className="hover:underline">For Candidates</button></li>
              <li><button className="hover:underline">For Employees</button></li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold text-center justify-center md:justify-start mb-4">Job Categories</h2>
            <ul className="space-y-2 text-sm text-center justify-center md:justify-start text-gray-300">
              <li><button className="hover:underline">Telecommunications</button></li>
              <li><button className="hover:underline">Hotels & Tourism</button></li>
              <li><button className="hover:underline">Construction</button></li>
              <li><button className="hover:underline">Education</button></li>
              <li><button className="hover:underline">Financial Services</button></li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold text-center justify-center md:justify-start mb-4">Newsletter</h2>
            <p className="text-sm text-center justify-center md:justify-start text-gray-300 mb-4">
              Eu nunc pretium vitae platea. Non netus elementum vulputate.
            </p>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full sm:w-64 px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white mb-4"
            />
            <button className="bg-emerald-600 hover:bg-emerald-500 w-full sm:w-64 py-2 rounded-md text-white font-semibold text-sm">
              Subscribe now
            </button>
          </div>
        </div>

        
        <div className="mt-12 pt-6 border-t  border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 text-center">
          <p>© 2024 Job Portal. Designed by Figma.guru</p>
          <div className="flex gap-6">
            <button className="hover:underline">Privacy Policy</button>
            <button className="hover:underline">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
