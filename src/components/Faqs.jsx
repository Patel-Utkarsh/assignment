"use client";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";


const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What will be the career trajectory after Stoa? Can I switch my current role?",
      answer: "Stoa enables individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual's hard work and dedication to their goals, supported by Stoa's career assistance resources. Our fellows have switched roles, functions and industries. They have received average salaries of around 15-16LPA and some have received salaries in the range of 40LPA as well."
    },
    {
      question: "Do you guarantee placements?",
      answer: "Stoa's week-long 'skill sprints' enable individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual's hard work and dedication to their goals, supported by Stoa's career assistance resources."
    },
    {
      question: "What happens if my company doesn’t approve Stoa as a recognised program?",
      answer: "Stoa provides a practical learning approach that helps individuals gain real-world experience and build a proof of their skills and competence, making it easier to showcase their expertise to potential employers. With Stoa's career assistance resources, individuals can create an impressive portfolio and connect with potential employers and industry professionals, regardless of their company's recognition of the program."
    },
    {
      question: "What happens if I don't clear the Charter? Can I still show Stoa on my profile?",
      answer: "Upon completing the Stoa program with a 60% aggregate, individuals are granted access to placements and the optional charter exam. However, if an individual does not pass the charter exam, they will not be awarded the charter holder certificate. Nevertheless, they will still receive the Stoa Program completion certificate and be granted access to valuable career assistance resources. Although individuals will not have the ability to showcase the Stoa Charter on their profile, they can still reference their completion of the Stoa program and the valuable knowledge and skills they have acquired."
    },
    {
      question: "Is there an income share agreement or a no-cost EMI?",
      answer: "We currently do not offer an income share agreement or a no-cost EMI option. However, we have partnered with reputed loan companies that provide education loans with EMIs starting from three months to forty-two months. The Stoa community helps individuals in their growth by providing access to a vast network of professionals, which can lead to job opportunities and career growth. Through events, workshops, and mentorship opportunities, individuals can expand their knowledge, develop new skills, and gain insights that enhance their personal and professional growth."
    }
  ];
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#F5E1C6] text-black">
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          FAQS
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md shadow-md"
            >
              <div onClick={() => toggleFAQ(index)} className="flex justify-between cursor-pointer text-lg font-semibold bg-gray-100 p-4 hover:bg-gray-200 px-5">
                <h3
                  
                >
                  {faq.question}
                </h3>
                <FaPlusCircle className="mt-1"/>


              </div>

              <div
                className={`p-4 text-gray-700 transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
