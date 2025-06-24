import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import JobCardd from "../Components/JobCardd";
import Sidebarr from "../Components/Sidebarr";
import JobCard from "../Components/common/JobCard";

const JobDetailsPage = () => {
  const handleJobClick = () => {
    console.log("Job Details Clicked");
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="bg-black">
        <Navbar />
        <h1 className="text-center text-white text-3xl font-bold pb-20 pt-3">
          Jobs Details
        </h1>
      </div>

      {/* Job Card */}
      <div className="mx-5 md:mx-20">
        <JobCardd 
        postedTime="12 min ago"
        jobTitle="Regional Creative Facilitator"
        companyName="Wisozk - Becker Co"
        logo="/Images/logo1.png"
        tags={["Media", "Part Time", "$28000-$32000", "Los-Angeles,USA"]}
        buttonLabel="Apply Now"/>
      </div>

      {/* Job Details Section */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-20 mt-10">
        {/* Left Content */}
        <div className="md:w-3/4">
          {/* Job Description */}
          <div>
            <h3 className="text-lg font-bold mb-4">Job Description</h3>
            <p className="leading-loose text-sm text-gray-600">
              Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa.
              Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat.
              Sem quis viverra viverra odio mauris nunc.
              <br />
              Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa. Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Key Responsibilities</h3>
            <ul className="list-disc leading-loose pl-6 text-sm text-gray-600 space-y-1">
              <li>Et nunc ut tempus duis nisl sed massa.</li>
              <li>Cras facilisis dignissim augue lorem amet adipiscing cursus.</li>
              <li>Ornare varius faucibus nisi vitae vitae cras ornare.</li>
              <li>Tortor amet porta proin in.</li>
              <li>Orci imperdiet nisi dignissim pellentesque morbi vitae.</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-9">
            <h3 className="text-lg font-bold mb-4">Professional Skills</h3>
            <ul className="list-disc leading-loose pl-6 text-sm text-gray-600 space-y-1">
              <li>Et nunc ut tempus duis nisl sed massa.</li>
              <li>Ornare varius faucibus nisi vitae vitae cras ornare.</li>
              <li>Tortor amet porta proin in.</li>
              <li>Orci imperdiet nisi dignissim pellentesque morbi vitae.</li>
            </ul>
          </div>

          {/* Tags */}
          <div className="mt-9">
            <h3 className="text-lg font-bold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-sm text-emerald-600 rounded-full">Full Time</span>
              <span className="px-3 py-1 bg-emerald-100 text-sm text-emerald-600 rounded-full">Commerce</span>
              <span className="px-3 py-1 bg-emerald-100 text-sm text-emerald-600 rounded-full">New-York</span>
              <span className="px-3 py-1 bg-emerald-100 text-sm text-emerald-600 rounded-full">Corporate</span>
              <span className="px-3 py-1 bg-emerald-100 text-sm text-emerald-600 rounded-full">Location</span>
            </div>
          </div>
        </div>

        
        <div className="md:w-80 ">
          
          <Sidebarr />

          
          <div className="bg-emerald-50 p-5 rounded-xl">
            <h4 className="font-bold text-gray-800 text-lg mb-4">Send Us Message</h4>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 px-4 py-2 rounded text-sm bg-white border focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="w-full mb-3 px-4 py-2 rounded text-sm bg-white border focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mb-3 px-4 py-2 rounded text-sm bg-white border focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="w-full mb-3 px-4 py-2 rounded text-sm bg-white border focus:outline-none resize-none"
            />
            <button className="bg-button-bg hover:bg-emerald-600 text-white w-1/2 py-2 text-xs rounded font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Related Jobs */}
      <div className="w-full mt-20 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-1">Related Jobs</h1>
        <p className="mb-6 text-sm text-gray-600">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
        </p>
        <div className="flex flex-col gap-4">
          <JobCard
            postedTime="15 min ago"
            jobTitle="Internal Integration Planner"
            companyName="Mraz, Quigley and Feest Inc."
            logo="/Images/logo1.png"
            tags={["Construction", "Full Time", "$48000-$50000", "Texas,USA"]}
            buttonLabel="Job Details"
            onButtonClick={handleJobClick}
          />
          <JobCard
            postedTime="24 min ago"
            jobTitle="District Intranet Director"
            companyName="VonRueden - Weber Co"
            logo="/Images/logo1.png"
            tags={["Commerce", "Full Time", "$42000-$48000", "Florida,USA"]}
            buttonLabel="Job Details"
            onButtonClick={handleJobClick}
          />
          <JobCard
            postedTime="26 min ago"
            jobTitle="Corporate Tactics Facilitator"
            companyName="Cormier, Turner and Flatley Inc"
            logo="/Images/logo1.png"
            tags={["Commerce", "Full Time", "$38000-$40000", "Boston,USA"]}
            buttonLabel="Job Details"
            onButtonClick={handleJobClick}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobDetailsPage;

