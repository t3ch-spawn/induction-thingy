import React from "react";
import quotes from "@/assets/white_quotes.svg"

export default function Loader() {
  return (
    <main className="min-h-[100vh] w-full bg-[#0A0A0A] flex flex-col items-center justify-center">
      {/* Container for heading, subtext and btn */}
      <div className="flex flex-col items-center justify-center gap-[36px] max-w-[686px] text-center text-white">
        {/* Heading */}
        <h1 className="text-[72px] font-[300] leading-[130%] reckless">The Milestones that Shaped the Journey to this Day</h1>


        {/* White quotes */}

        <img src={quotes} alt="" />

        {/* Sub text */}
        <p className="instrument leading-[150%] tracking-[-0.02em] max-w-[400px]">
          A web chapter of your nursing journey built on learning, dedication,
          and strength.
        </p>

        {/* Button */}
          <button className="p-[3px] border border-[#FFFFFF66] rounded-[100px] w-[195px] h-[54px]">

            {/* Actual container */}
            <div className="bg-white rounded-[100px] flex items-center h-full">

              {/* Bubble to drag */}
              <div className="size-[36px] rounded-full bg-[#0A0A0A] ml-[5px]">

              </div>

              {/* Container for texts */}
              <div>

              </div>

            </div>

        </button>
      </div>
    </main>
  );
}
