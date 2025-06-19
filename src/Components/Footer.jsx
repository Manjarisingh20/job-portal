import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 mt-12">
      <div className="max-w-7xl mx-auto">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          
          
          <div className=''>
            <div className='flex items-center'>
              <img src="/Images/mainicon.png" alt="logo" className="w-5 h-5" />
              <h1 className="text-lg ml-3 font-bold">Job</h1>
            </div>
            <p className="text-sm mt-6 font-semibold text-gray-300">
              Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris...
            </p>
          </div>

          
          <div className=''>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:underline">About Us</button></li>
              <li><button className="hover:underline">Our Team</button></li>
              <li><button className="hover:underline">Partners</button></li>
              <li><button className="hover:underline">For Candidates</button></li>
              <li><button className="hover:underline">For Employees</button></li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-4">Job Categories</h2>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:underline">Telecommunications</button></li>
              <li><button className="hover:underline">Hotels & Tourism</button></li>
              <li><button className="hover:underline">Construction</button></li>
              <li><button className="hover:underline">Education</button></li>
              <li><button className="hover:underline">Financial Services</button></li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="text-sm mb-4 text-gray-300">
              Eu nunc pretium vitae platea. Non netus elementum vulputate.
            </p>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-md border border-white bg-black text-white mb-3"
            />
            <button className="bg-emerald-600 hover:bg-emerald-500 w-full py-2 rounded-md text-white font-semibold text-sm">
              Subscribe now
            </button>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 border-t border-gray-700 pt-6 gap-4">
          
          
          <p className="text-xs text-gray-400">
            © Copyright Job Portal 2024. Designed by Figma.guru
          </p>

          
          <div className="flex gap-6 text-sm">
            <button className="hover:underline">Privacy Policy</button>
            <button className="hover:underline">Terms & Conditions</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
