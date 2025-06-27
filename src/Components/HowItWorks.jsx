import React from "react";
import { FiUserPlus, FiUpload, FiSearch, FiCheck } from "react-icons/fi";

const steps = [
  { icon: <FiUserPlus />, title: "Create Account", desc: "Felis eu ultrices a sed massa. Commodo fringilla sed tempo" },
  { icon: <FiUpload />, title: "Upload Resume", desc: "Felis eu ultrices a sed massa. Commodo fringilla sed tempo" },
  { icon: <FiSearch />, title: "Find Jobs", desc: "Felis eu ultrices a sed massa. Commodo fringilla sed tempo" },
  { icon: <FiCheck />, title: "Apply Jobs", desc: "Felis eu ultrices a sed massa. Commodo fringilla sed tempo" },
];

const HowItWorks = () => (
  <section className="text-center py-1 container">
    <h2 className="text-3xl font-bold mb-4">How it works</h2>
    <p className="text-gray-600 mb-20">At eu lobortis pretium tincidunt ameseris que hen aliquet. Blandit a massa elementum <br></br>id scelerisque rhoncus...</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mr-10 ml-10 mt-10">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col pr-4 pl-4   items-center">
          <div className="text-3xl text-button-bg mb-8">{step.icon}</div>
          <h3 className="font-semibold mb-1">{step.title}</h3>
          <p className="text-xs pt-2  text-gray-500">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
