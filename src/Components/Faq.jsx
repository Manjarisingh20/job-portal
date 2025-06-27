import React, { useState } from "react";
import { BsPlusCircle, BsXCircle } from 'react-icons/bs';

const faqs = [
  {
    question: "Can I upload a CV?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eget odio sed elit ornare iaculis at eu est massa. Convallis fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat."
  },
  {
    question: "How long will the recruitment process take?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eget odio sed elit ornare iaculis at eu est massa. Convallis fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat."
  },
  {
    question: "Do you recruit for Graduates, Apprentices and Students?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eget odio sed elit ornare iaculis at eu est massa. Convallis fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat."
  },
  {
    question: "What does the recruitment and selection process involve?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eget odio sed elit ornare iaculis at eu est massa. Convallis fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat."
  },
  {
    question: "Can I receive notifications for any future jobs that may interest me?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam eget odio sed elit ornare iaculis at eu est massa. Convallis fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="container mt-4  py-12">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-500 text-sm mb-10">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
      </p>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 transition-all duration-300 ${
              openIndex === index ? "bg-emerald-50 border-emerald-400" : "bg-white"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              <h3 className="font-semibold text-sm md:text-base">{`0${index + 1}  ${faq.question}`}</h3>
              {openIndex === index ? (
                <BsXCircle className="text-button-bg" />
              ) : (
                <BsPlusCircle className="text-button-bg" />
              )}
            </div>
            {openIndex === index && faq.answer && (
              <p className="text-gray-600 text-sm mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
