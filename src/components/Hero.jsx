"use client";

import React from 'react'
import logo from "../Assets/Images/logo.png";
import Image from "next/image";
import { FaAngleDoubleDown } from "react-icons/fa";

function Hero() {
  return (
     <div className="bg-[#440001] h-screen w-[100%]">
        <div className="w-[90%] mx-auto relative">
          <div className="w-[70%] pt-5">
            <div>
              <Image src={logo} />
            </div>
            <p className="">INDIA'S BEST ALTERNATIVE TO AN MBA</p>
            <p className="font-semibold text-5xl pt-5 w-[80%]">
              Online MBA is dull, unlike Stoa. Change your career trajectory in
              24 weeks.
            </p>
            <p className="text-2xl pt-5 w-[40%] text-slate-300">
              Learn business skills by doing, build proof of work & get
              feedback, join a community of 1000+ active professionals and
              access career services
            </p>
          </div>

          <div className="absolute z-0 bottom-[-25%] left-[25%] flex">
            <Image
              className="h-[300px] w-[300px]  object-cover "
              src={require("../Assets/Images/heroSection/person.webp")}
            />
            <div className="bg-white text-black px-5 rounded-md h-[220px] ">
              <div className="mx-auto mt-7">
                <p className="font-bold text-center text-sm">NISHANT KAUNTIA</p>
                <p className="font-bold text-center text-gray-500 text-sm mt-3">
                  PRE STOA
                </p>
                <p className="text-center">The Balcony</p>
              </div>

              <div className="flex justify-center">
                <FaAngleDoubleDown size={30} style={{ color: "red" }} />
              </div>

              <div>
                <p className="font-bold text-center text-gray-500 text-sm mt-3">
                  POST STOA
                </p>
                <Image
                  src={require("../Assets/Images/heroSection/amuseLabs.webp")}
                />
              </div>
            </div>
          </div>

          <div className="bg-white h-[480px] w-[350px] absolute right-0 top-40 rounded-md ">
            <Image
              className="mx-auto mt-2"
              src={require("../Assets/Images/heroSection/team.png")}
            />
            <div className="w-[90%] mx-auto">
              <p className="text-red-800 font-semibold ">
                Talk to our team and get your profile evaulated.
              </p>
              <p className="text-gray-500">
                Next cohort starts at 5th Jan 2024
              </p>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-1">
                  <input
                    className="border-slate-300 py-1 border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="border-slate-300 border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className="border-slate-300 py-1  border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="Email Id"
                  />
                  <input
                    className="border-slate-300 border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <input
                  className="border-slate-300 border-[2px] rounded-sm px-2 w-full mt-3"
                  type="number"
                  placeholder="Phone No"
                />
                <div className="grid grid-cols-2 gap-1 mt-4">
                  <input
                    className="border-slate-300 py-1 border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="Work Exp"
                  />
                  <input
                    className="border-slate-300 border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="Job title"
                  />
                  <input
                    className="border-slate-300 py-1 border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="Job Function"
                  />
                  <input
                    className="border-slate-300 border-[2px] rounded-sm px-2"
                    type="text"
                    placeholder="Current CTC"
                  />
                </div>
              </div>

              <div className=" flex mt-2 gap-2 text-black  text-sm">
                <input type="checkbox" name="" id="" />
                <p className="">
                  I allow stoa to contact me regarding their offerings via
                  email, whatsapp and call
                </p>
              </div>

              <button className="w-full bg-red-900 py-1 rounded-sm mt-2">
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero