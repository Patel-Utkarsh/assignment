"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className=" bg-black p-3">
      <div className="w-[80%] mx-auto flex justify-between">
        <Image
          className="h-[100px] "
          src={require("../Assets/Images/footerSection/darkLogo.png")}
        />
        <div className="text-gray-400 flex flex-col  text-2xl w-[60%] ">
          <div className="flex justify-around gap-5 pt-5">
            <p>Stoa Daily</p>
            <p>Stoa Events</p>
            <p>Community</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 w-[90%] justify-end text-gray-300 pr-4">
        <p>About</p>
        <p>Work at Stoa</p>
        <p>Hire from Stoa</p>
        <p>Tecah at Stoa</p>
        <p>Contacts</p>
        <Image
          className="w-[125px] mt-[-15px]"
          src={require("../Assets/Images/footerSection/social.png")}
        />
      </div>
    </div>
  );
}

export default Footer;
