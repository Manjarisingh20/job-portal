import React from 'react';
import JobCard from './common/JobCard';
import logo1 from "../Icons/logo1.png";

const handleJobClick = () => {
  alert("Opening job details...");
};

function RecentJobs() {
  return (
    <div className="Recent-Jobs">
      <div>
        <h1 className="text-5xl font-semibold mt-14 ml-10">Recent Jobs Available</h1>
        <p className="text-s mt-6 ml-10">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...
        </p>
      </div>

      {/* JobCard 1 */}
      <JobCard
        postedTime="10 min ago"
        jobTitle="Forward Security Director"
        companyName="Bauch, Schuppe and Schulist Co"
        logo={logo1}
        tags={["Hotels & Tourism", "Full Time", "$40000-$42000", "New-York,USA"]}
        buttonLabel="Job Details"
        onButtonClick={handleJobClick}
      />

      {/* JobCard 2 */}
      <JobCard
        postedTime="12 min ago"
        jobTitle="Regional Creative Facilitator"
        companyName="Wisozk - Becker Co"
        logo={logo1}
        tags={["Media", "Part Time", "$28000-$32000", "Los-Angeles,USA"]}
        buttonLabel="Job Details"
        onButtonClick={handleJobClick}
      />

      {/* JobCard 3 */}
      <JobCard
        postedTime="15 min ago"
        jobTitle="Internal Integration Planner"
        companyName="Mraz, Quigley and Feest Inc."
        logo={logo1}
        tags={["Construction", "Full Time", "$48000-$50000", "Texas,USA"]}
        buttonLabel="Job Details"
        onButtonClick={handleJobClick}
      />

      {/* JobCard 4 */}
      <JobCard
        postedTime="24 min ago"
        jobTitle="District Intranet Director"
        companyName="VonRueden - Weber Co"
        logo={logo1}
        tags={["Commerce", "Full Time", "$42000-$48000", "Florida,USA"]}
        buttonLabel="Job Details"
        onButtonClick={handleJobClick}
      />

      {/* JobCard 5 */}
      <JobCard
        postedTime="26 min ago"
        jobTitle="Corporate Tactics Facilitator"
        companyName="Cormier, Turner and Flatley Inc"
        logo={logo1}
        tags={["Commerce", "Full Time", "$38000-$40000", "Boston,USA"]}
        buttonLabel="Job Details"
        onButtonClick={handleJobClick}
      />
    </div>
  );
}

export default RecentJobs;
