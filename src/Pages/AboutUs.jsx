import React from "react";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import VideoFeature from "../Components/VideoFeature";
import FAQ from "../Components/Faq";
import TrustedCompanies from "../Components/TrustedCompanies";
import Layout from "../Components/common/Layout";
import News from "../Components/News";

const AboutUs = () => (
  <>
  <Layout>
  <div className="bg-black">
        <h1 className="text-center text-white text-4xl font-bold pb-20 pt-3">
          About Us
        </h1>
      </div>
    <Banner />
    <HowItWorks />
    <VideoFeature />
    <FAQ />
    <TrustedCompanies />
    <News />
    </Layout>
  </>
);

export default AboutUs;
