import React from "react";
import JobCardd from "../Components/JobCardd";
import Sidebarr from "../Components/Sidebarr";
import JobCard from "../Components/common/JobCard";
import Layout from "../Components/common/Layout";
import { FaCheck } from 'react-icons/fa';
import Images from "../Components/common/Images";

const JobDetailsPage = () => {
  const handleJobClick = () => {
    console.log("Job Details Clicked");
  };

  return (
    <Layout>
      <div className="font-sans bg-white text-gray-800">
        <h1 className="text-center text-white text-4xl font-bold pb-20 pt-3 bg-black">
          Job Details
        </h1>

        <div className="px-4 md:m-10 md:px-20">
          <JobCardd
            postedTime="12 min ago"
            jobTitle="Regional Creative Facilitator"
            companyName="Wisozk - Becker Co"
            logo="/Images/logo1.png"
            buttonLabel="Apply Now"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 px-4 md:m-10 md:px-20 mt-10">
          
          <div className="w-full md:w-3/4">
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Job Description</h3>
              <p className="leading-loose text-sm md:text-base text-gray-600 break-words">
                Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa.
                Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat.
                Sem quis viverra viverra odio mauris nunc.<br />
                Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa. Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.
              </p>
            </div>

            
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">Key Responsibilities</h3>
              <ul className="list-none leading-loose space-y-2 text-sm md:text-base text-gray-600 break-words">
                {[
                  "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu",
                  "Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in",
                  "Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheck className="text-button-bg mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="mt-9">
              <h3 className="text-2xl font-bold mb-4">Professional Skills</h3>
              <ul className="list-none leading-loose space-y-2 text-sm md:text-base text-gray-600 break-words">
                {[
                  "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu",
                  "Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in",
                  "Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheck className="text-button-bg mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="mt-9">
              <h3 className="text-2xl font-bold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {["Full Time", "Commerce", "New-York", "Corporate", "Location"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-sidebar-bg text-sm text-button-bg rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            
            <div className="flex flex-wrap gap-3 mt-16 items-center">
              <h1 className="font-bold">Share Job:</h1>
              <Images src='/Images/job.png' className="h-5 w-5" />
              <Images src='/Images/twitter.png' className="h-5 w-5" />
              <Images src='/Images/linkedin.png' className="h-5 w-5" />
            </div>

            
            <div className="w-full mb-20 mt-10 md:mt-20">
              <h1 className="text-3xl md:text-5xl font-bold mb-3">Related Jobs</h1>
              <p className="mb-10 text-sm text-gray-600">
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
          </div>

          
          <div className="w-full md:w-80 space-y-6">
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
              <button className="bg-button-bg hover:bg-emerald-600 text-white w-full sm:w-1/2 py-2 text-xs rounded font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetailsPage;
