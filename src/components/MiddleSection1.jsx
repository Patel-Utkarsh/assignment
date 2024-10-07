"use client";
import React from "react";
import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";

const programData = [
  {
    id: 1,
    title: "6 Months",
    des: "Online Program",
  },
  {
    id: 2,
    title: "3 day induction",
    des: "Office in Bangalore",
  },
  {
    id: 3,
    title: "10-12 hrs",
    des: "Online per week",
  },
  {
    id: 4,
    title: "1000+",
    des: "Almuni network",
  },
  {
    id: 5,
    title: "300+",
    des: "Hiring Partners",
  },
  {
    id: 6,
    title: "2.95L + 18% GST",
    des: "Program Fee",
  },
];

const careerBenefitsData = [
  {
    id: 1,
    title: "AVG RISE IN SALARY",
    des: "62%",
  },
  {
    id: 2,
    title: "AVG SALARY",
    des: "12.7 LPA",
  },
  {
    id: 3,
    title: "MEDIAN SALARY",
    des: "11.5 LPA",
  },
  {
    id: 4,
    title: "HIGHEST SALARY",
    des: "20 LPA",
  },
];

const listData = {
  Products: [
    "Product Discovery and Research",
    "Product Growth",
    "Plan and Build your MVP",
  ],

  Marketing: [
    "Customer Journey",
    "Marketing Mix",
    "Digital Marketing",
    "sales",
  ],

  Leadership: [
    "Goal Setting & Alignment",
    "Business Writing & Communication",
    "Zero to One",
  ],
  "General Management": [
    "Structured Thinking and Problem Solving",
    "Business Operations",
    "Supply Chain Management",
    "Venture Creation 101",
  ],
};

const facultyData = [
  {
    id: 1,
    name: "Ashish Dave",
    position: "CEO, Mirae Asset Venture Investments",
  },
  {
    id: 2,
    name: "Harsh ShaH",
    position: "Co-Founder, Fynd (acq. Reliance)",
  },
  {
    id: 3,
    name: "Nishant Katoch",
    position: "SPM, Amazon. Ex TSMG, BCG, IIM-B",
  },
  {
    id: 4,
    name: "Ashwin Goyal",
    position: "Group PM, Disney+ Hotstar",
  },
  {
    id: 5,
    name: "Jyoti Vaddi",
    position: "Head of Marketing, nurture.farm",
  },
  {
    id: 6,
    name: "Adhiraj Arora",
    position: "Stoa. ex-BCG, Stanza Living, ISB, IIT-K alum",
  },
  {
    id: 7,
    name: "malvika m",
    position: "ex-Apple, Motorola Symantec, Anvis",
  },
  {
    id: 8,
    name: "Shyam Sadasivan",
    position: "Ex-Director of Leadership, Arm. BITS",
  },
  {
    id: 9,
    name: "Akilan A P",
    position: "RevOps, inFeedo, ex- Freshworks",
  },
  {
    id: 10,
    name: "Pranjal Kalra",
    position: "SVP Beam Mobility, ex-Bain & Co, BITS",
  },
  {
    id: 11,
    name: "Aditya Kulkarni",
    position: "Co-founder, Stoa",
  },
  {
    id: 12,
    name: "Harshali Damle",
    position: "MDI-G Faculty PhD. IIM-B",
  },
];

const clientsData = [
  { id: 1, name: "Nithin Kamath", position: "Co-Founder, Zerodha" },
  { id: 2, name: "Kunal Shah", position: "Co-Founder, CRED" },
  { id: 3, name: "Richa Kar", position: "Co-Founder, Zivame" },
  { id: 4, name: "Gagan Biyani", position: "Co-Founder, Udemy" },
  { id: 5, name: "Phanindra S.", position: "Co-Founder, RedBus" },
  { id: 6, name: "Pravin Jadhav", position: "ex-CEO, Paytm Money" },
];









function MiddleSection1() {
  return (
    <div className="w-[100%] bg-[#F5E1C6] pb-5 ">
      <div className="w-[90%] mx-auto relative">
        <div className="grid grid-cols-3 bg-[#eacc95] w-[65%] absolute top-[-30px] px-3 rounded-md ">
          {programData.map(({ id, title, des, key }) => (
            <div className="text-black flex flex-col p-3" key={id}>
              <p className="text-red-700 font-bold text-xl">{title}</p>
              <p className="text-red-700  text-xl">{des}</p>
            </div>
          ))}
        </div>
        <div className="pt-[150px] pb-3 text-black">
          <div className="bg-white py-8 mb-5 rounded-md w-[65%]">
            <p className="font-bold text-2xl text-slate-500 pl-5">
              {" "}
              Featured In
            </p>
            <div className="flex px-4 justify-around mt-5">
              {Array.from({ length: 4 }, (_, i) => i).map((elment) => (
                <Image
                  id={elment}
                  className="h-full w-[120px]"
                  src={require("../Assets/Images/dummy.svg")}
                />
              ))}
            </div>
          </div>
        </div>

        <div className=" bg-green-900 w-[65%] pb-5 rounded-md ">
          <p className="text-white font-bold text-2xl p-3 pt-4">
            Careers after Stoa
          </p>
          <div className="flex justify-around w-[95%] mx-auto">
            {careerBenefitsData.map(({ title, des, id }) => (
              <div className="text-white flex flex-col bg-green-500 px-5 py-5 rounded-sm">
                <p className="text-sm text-gray-300">{title}</p>
                <p className="font-bold text-lg">{des}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-6 w-[95%] mx-auto gap-y-2 mt-3 pl-3 ">
            {Array.from({ length: 18 }, (_, i) => i).map(() => (
              <div className="bg-white   h-[100px] w-[100px] flex justify-center items-center rounded-sm  ">
                <Image src={require("../Assets/Images/dummy.svg")} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#e4b67a] w-[65%] mt-5 flex p-4 justify-around rounded-md border-slate-200 border-2">
          <p className="text-3xl text-red-700 font-bold">
            Learning via sprints
          </p>
          <div>
            {Object.entries(listData).map((item) => (
              <div>
                <p className="font-bold text-2xl text-red-700">{item[0]}</p>
                <div className="w-[100%] h-[1px] bg-black"></div>
                {item[1].map((element) => (
                  <>
                    <p className="text-black text-sm">{element}</p>
                    <div className="w-[100%] border-dotted border-[1px] border-black"></div>
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[65%] bg-white mt-5 rounded-md p-5">
          <div>
            <TfiWorld color="red" size={40} />
            <p className="font-bold text-2xl mt-2 text-red-600">
              Faculty with real-world experience
            </p>
          </div>

          <div className="grid grid-cols-4 gap-x-7 gap-3 px-3">
            {facultyData.map(({ name, position, id }) => (
              <div>
                <div className="relative">
                  <Image
                    className="h-[100px] w-[100px]"
                    src={require("../Assets/Images/profile.webp")}
                  />
                  <div className="absolute right-[-13%] top-[40%] bg-white border-2 p-1">
                    <Image src={require("../Assets/Images/dummy.svg")} />
                  </div>
                </div>
                <div>
                  <p className="text-black font-bold">{name}</p>
                  <p className="text-slate-400">{position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[65%] p-5 bg-[#e4b67a] mt-5 rounded-md">
          <p className="font-bold text-2xl text-red-700">Hear from alumni</p>
          <p className="text-black mt-5">
            "The program taught me a new mindset of applying a structured way to
            think before I approach any problem statement. Numerous frameworks
            for applying business concepts of Research, Marketing, and
            Operations became much easier and accessible for me post the
            program."
          </p>

          <div className="mt-5 flex gap-3">
            <Image
              className="h-[50px] w-[50px]"
              src={require("../Assets/Images/profile.webp")}
            />
            <div>
              <p className="text-red-600 font-semibold">Chitrangda Mishra</p>
              <p className="text-black">Cohort 9</p>
            </div>
          </div>
        </div>

        <div className="w-[65%] p-5 bg-white mt-5 rounded-md">
          <p className="text-red-700 font-bold text-2xl">Backed By the best</p>
          <div className="flex mt-5">
            {clientsData.map(({ id, name, position }) => (
              <div>
                <Image
                  className="h-[50px] w-[50px] mx-auto"
                  src={require("../Assets/Images/profile.webp")}
                />
                <div>
                  <p className="font-bold text-black text-sm text-center">
                    {name}
                  </p>
                  <p className="text-gray-500 text-center">{position}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-black mt-5">and many more</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection1;
