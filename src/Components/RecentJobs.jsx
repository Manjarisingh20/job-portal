import React from 'react';
import JobCard from './common/JobCard';

const handleJobClick = () => {
  alert("Opening job details...");
};

function RecentJobs() {
  return (
    <div className="px-4 md:px-12 py-10 bg-white">
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold mt-14">Recent Jobs Available</h1>
        <p className="text-sm md:text-base mt-4 text-gray-600">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-8">
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
