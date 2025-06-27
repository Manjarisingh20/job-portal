import React, { useState } from "react";
import JobCard from "../Components/common/JobCard";
import TopCompaniesCard from "../Components/common/TopCompaniesCard";
import Sidebar from "../Components/Sidebar";
import Button from "../Components/common/Button";
import Layout from "../Components/common/Layout";
import Drawer from "@mui/material/Drawer";
import FilterListIcon from "@mui/icons-material/FilterList";

const JobsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleJobClick = () => {
    console.log("Job Details button clicked");
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Layout>
      <div className="font-sans">
        <div className="bg-black">
          <h1 className="text-center container text-white text-4xl font-bold pb-20 pt-3">Jobs</h1>
        </div>

        <div className="container px-4 md:px-20">
          <div className="xl:hidden my-4">
            <button
              className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2"
              onClick={toggleDrawer(true)}
            >
              <FilterListIcon fontSize="small" />
              Show Filters
            </button>
          </div>

          <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <div className="w-96 px-4 py-6 ">
              <Sidebar />
            </div>
          </Drawer>

          <div className="flex flex-col xl:flex-row gap-6">
            <div className="hidden xl:block w-1/4">
              <Sidebar />
            </div>

            <div className="w-full xl:w-3/4">
              <div className="mt-10 flex flex-col gap-1">
                <div className="flex flex-col xl:flex-row xl:justify-between mb-6">
                  <span className="text-gray-500 mb-2 md:mb-0">
                    Showing 6–6 of 10 results
                  </span>
                  <select className="px-3 py-1 text-sm border border-gray-300 rounded-md w-44">
                    <option>Sort by Latest</option>
                    <option>Sort by Popularity</option>
                    <option>Other</option>
                  </select>
                </div>

                {[...Array(5)].map((_, idx) => (
                  <JobCard
                    key={idx}
                    postedTime="10 min ago"
                    jobTitle="Forward Security Director"
                    companyName="Example Company"
                    logo="/Images/logo1.png"
                    tags={[
                      "Full Time",
                      "$40000-$42000",
                      "New-York, USA",
                      "Hotels & Tourism",
                    ]}
                    buttonLabel="Job Details"
                    onButtonClick={handleJobClick}
                  />
                ))}
              </div>

              <div className="flex justify-center xl:justify-end gap-2 mt-6">
                <Button className="border hover:text-white hover:bg-button-bg rounded-lg px-3 py-2 text-sm" label={1} />
                <Button className="border hover:text-white hover:bg-button-bg rounded-lg px-3 py-2 text-sm" label={2} />
                <Button className="border hover:text-white hover:bg-button-bg rounded-lg px-3 py-2 text-sm" label="Next >" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sidebar-bg mt-20 py-10">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Top Company</h2>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
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
