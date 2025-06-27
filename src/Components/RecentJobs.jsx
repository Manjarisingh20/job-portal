import React from 'react';
import JobCard from './common/JobCard';

const handleJobClick = () => {
  alert("Opening job details...");
};

function RecentJobs() {
  return (
    <div className="container  py-10 bg-white">
      <div className="text-center md:mr-20 md:ml-20 md:text-left">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold mt-14 lg:text-left sm:text-center">
  Recent Jobs Available
</h1>


        <p className="text-sm md:text-base mt-4 lg:text-left sm:text-center text-gray-600">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...
        </p>
      </div>

      <div className="mt-10 flex flex-col ">
        <JobCard
          postedTime="10 min ago"
          jobTitle="Forward Security Director"
          companyName="Bauch, Schuppe and Schulist Co"
          logo="/Images/logo1.png"
          tags={["Hotels & Tourism", "Full Time", "$40000-$42000", "New-York,USA"]}
          buttonLabel="Job Details"
          onButtonClick={handleJobClick}
        />
        <JobCard
          postedTime="12 min ago"
          jobTitle="Regional Creative Facilitator"
          companyName="Wisozk - Becker Co"
          logo="/Images/logo1.png"
          tags={["Media", "Part Time", "$28000-$32000", "Los-Angeles,USA"]}
          buttonLabel="Job Details"
          onButtonClick={handleJobClick}
        />
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
  );
}

export default RecentJobs;

