import React from "react";
import black_name from "@/assets/black_name.svg";
import TransitionLink from "./TransitionLink";

export default function Navbar({className}) {
  const date = new Date();
  const options = { day: "2-digit", month: "short" };
  const dayMonth = date.toLocaleDateString("en-GB", options);

  const year = date.getFullYear();

  const formatted = `${dayMonth}, ${year}`;

  return (
    <nav className={`flex justify-between z-[40] items-center px-[24px] pr-[29px] pt-[28px] sticky top-0 w-full nav bg-transparent ${className}`}>
      {/* Container for links */}
      <div className="flex gap-[12px] justify-center items-center w-fit reckless text-[14px]">
        {/* Home btn */}
        <a
          href="/home"
          className="w-[77px] h-[40px] bg-[#9B47FB] flex justify-center items-center text-white"
        >
          Home
        </a>

        <TransitionLink
          href={"/wishes"}
          className="bg-black w-[158px] h-[40px] flex justify-center items-center text-white"
        >
          Wishes from friends
        </TransitionLink>
      </div>

      {/* Container for her name */}
      <img src={black_name} className="mr-[110px]" alt="" />

      {/* Container for timing and date */}
      <div className="text-[14px] flex justify-center items-center gap-[16px] reckless ">
        <p className="text-[#00000066] mix-blend-difference">00:01</p>
        <p className="text-black mix-blend-difference">
          {dayMonth}, {year}
        </p>
      </div>
    </nav>
  );
}
