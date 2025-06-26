import React, { useState } from "react";
import JobCard from "../Components/common/JobCard";
import TopCompaniesCard from "../Components/common/TopCompaniesCard";
import Sidebar from "../Components/Sidebar";
import Button from "../Components/common/Button";
import Layout from "../Components/common/Layout";

const JobsPage = () => {
  const [salary, setSalary] = useState(50000);

  const handleChange = (e) => {
    setSalary(e.target.value);
  };

  const handleJobClick = () => {
    console.log("Job Details button clicked");
  };

  return (
    <Layout >
    <div className=" font-sans">
      <div className="bg-black">
        <h1 className="text-center container text-white text-4xl font-bold pb-20 pt-3">
          Jobs
        </h1>
      </div >
      <div className="flex container px-4 md:px-20">
       <Sidebar />
       

       
        <div className="container w-full md:w-3/4">
          <div className="mt-10 flex  flex-col gap-1">
            <div className="mt-4 mb-10 ">
            <span className="mt-5 mr-48 text-gray-500">
              Showing 6–6 of 10 results
              </span>
            <select className=" px-3 py-1 text-sm border border-gray-300 rounded-md w-44">

          <option>Sort by Latest</option>
          <option>Sort by Popularity</option>
          <option>Other</option>
        </select>
            </div>
            
            <JobCard
              postedTime="10 min ago"
              jobTitle="Forward Security Director"
              companyName="Bauch, Schuppe and Schulist Co"
              logo="/Images/logo1.png"
              tags={[
                "Hotels & Tourism",
                "Full Time",
                "$40000-$42000",
                "New-York,USA",
              ]}
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

          <div className="flex  gap-2 mt-4">
            <Button className='border hover:text-white ml-96 hover:bg-button-bg rounded-lg px-3 py-2 text-sm' label={1}/>
            <Button className='border hover:text-white  hover:bg-button-bg rounded-lg px-3 py-2 text-sm' label={2}/>
            <Button className='border hover:text-white ml-96 hover:bg-button-bg rounded-lg  px-3 py-1 text-sm' label="Next  >"/>
          </div>
        </div>
      </div>

      <div className="bg-sidebar-bg">
      <div className="container mt-20 py-10  text-center">
        <h2 className="text-4xl font-bold mb-4">Top Company</h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="gap-6 mx-16 grid grid-cols-1 md:grid-cols-4">
          <TopCompaniesCard />
          <TopCompaniesCard />
          <TopCompaniesCard />
          <TopCompaniesCard />
        </div>
      </div>

      </div>
    </div>
    </Layout>
  );
};

export default JobsPage;
