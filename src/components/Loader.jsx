import React, { useEffect, useRef, useState } from "react";
import quotes from "@/assets/white_quotes.svg";
import { motion, animate } from "motion/react";
import gsap from "gsap";
import pointerImg from "@/assets/pointer.svg";
import pic_1 from "@/assets/pic_1.webp";
import pic_2 from "@/assets/pic_2.webp";
import pic_3 from "@/assets/pic_3.webp";
import pic_4 from "@/assets/pic_4.webp";
import pic_5 from "@/assets/pic_5.webp";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import TransitionLink from "./TransitionLink";

export default function Loader() {
  const bubbleConstraintRef = useRef(null);
  const [isDraggable, setIsDraggable] = useState(true);

  useGSAP(() => {
    // gsap.to(".pageOverlay", {
    //   y: "0%",
    //   duration: 1,
    //   repeat: -1,
    //   yoyo: true,
    //   clipPath: "ellipse(140% 120% at  50% 100%)",
    //   //   clipPath: "ellipse(49% 50% at 50% 50%)",
    //   ease: "power2.inOut",
    // });

    let split = SplitText.create(".split", {
      type: "words, lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) => {
        return gsap
          .timeline()
          .to(".text-cont", {
            opacity: 1,
            duration: 1,
          })
          .from(self.lines, {
            y: 80,
            stagger: 0.2,
            ease: "power2.out",
          })
          .from(
            ".loader-quote",
            {
              y: 50,
              opacity: 0,
            },
            "<"
          )
          .from(
            ".button-cont",
            {
              y: 30,
              opacity: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            "<1.2"
          );
      },
    });
  });

  return (
    <main className="min-h-[100vh] w-full bg-[#0A0A0A] flex flex-col items-center justify-center page">
      {/* Container for heading, subtext and btn */}
      <div className="flex flex-col items-center justify-center gap-[36px] max-w-[856px] text-center text-white relative z-[5] opacity-0 text-cont">
        {/* Heading */}
        <h1 className="text-[72px] font-[300] leading-[130%] reckless split">
          The Milestones that <br /> Shaped the Journey to <br /> this Day
        </h1>

        {/* White quotes */}

        <img src={quotes} className="loader-quote" alt="" />

        {/* Sub text */}
        <p className="instrument leading-[150%] tracking-[-0.02em] max-w-[400px] split">
          A web chapter of your nursing journey built on learning, dedication,
          and strength.
        </p>

        {/* Button */}
        <button className="p-[3px] border border-[#FFFFFF66] rounded-[100px] w-[195px] h-[54px] button-cont">
          {/* Actual container */}
          <div
            ref={bubbleConstraintRef}
            className="bg-white rounded-[100px] flex items-center h-full px-[5px] instrument"
          >
            {/* Bubble to drag */}
            <motion.div
              drag={isDraggable}
              dragMomentum={false}
              whileDrag={{ cursor: "grabbing" }}
              // dragConstraints={bubbleConstraintRef}
              dragConstraints={{ left: 0, right: 142, top: 0, bottom: 0 }}
              dragElastic={0}
              onDragEnd={(e, info) => {
                const bubbleLeft = document
                  .querySelector(".black-bubble")
                  .getBoundingClientRect().left;
                const containerLeft =
                  bubbleConstraintRef.current.getBoundingClientRect().left;

                const difference = bubbleLeft - containerLeft;

                if (difference > 146) {
                  setIsDraggable(false);
                  const bubble = document.querySelector(".black-bubble");
                  bubble.classList.add("normal-cursor");

                  // Trigger wishes link
                  const wishesLink = document.querySelector(".wishes-link");
                  setTimeout(() => {
                    wishesLink.click();
                  }, 500);
                  return;
                }
                animate(
                  ".black-bubble",
                  { x: 0 },
                  { duration: 0.3, type: "spring", stiffness: 180, damping: 20 }
                );

                // animate(".slide-text", { x: 0 }, { duration: 0.3 });
                gsap.to(".slide-text", {
                  duration: 0.5,
                  x: 0,
                  ease: "back.out(3)",
                });
                console.log("bla");
              }}
              onDrag={(e) => {
                const text = document.querySelector(".slide-text");
                const bubble = document.querySelector(".black-bubble");
                const container = bubbleConstraintRef.current;
                const transX =
                  bubble.getBoundingClientRect().left -
                  container.getBoundingClientRect().left;

                const percent = transX / text.getBoundingClientRect().width;
                const interpolated = gsap.utils.interpolate(0, 25, percent);
                gsap.to(".slide-text", {
                  x: `-${interpolated}%`,
                  duration: 0,
                });
                // text.style.transform = `translateX(-${interpolated}%)`;
              }}
              className="size-[36px] rounded-full bg-[#0A0A0A]  hover:!cursor-grab black-bubble relative z-[3]"
            >
              <img
                className="absolute center-x-y pointer-events-none"
                src={pointerImg}
                alt=""
              />
            </motion.div>

            {/* Container for texts */}
            <div className="text-[14px] text-black ml-[10px] slide-text pointer-events-none relative z-[2]">
              Slide to experience
            </div>
          </div>
        </button>

        <TransitionLink
          className="opacity-0 pointer-events-none wishes-link"
          href={"/wishes"}
        >
          Wishes
        </TransitionLink>
      </div>

      {/* Container for pics moving behind */}
      <div className="fixed w-full h-[100vh] overflow- inset-0 z-[2] pointer-events-none">
        <PicsContainer />
        <PicsContainer className="" />
      </div>

      {/* page transition overlay */}
      <div className="fixed w-[100vw] h-[200vh] top-0 bg-white z-[100] pageOverlay translate-y-[100vh]"></div>
      {/* <div className="fixed w-[120vh] h-[100vw] top-[-45vh] bg-white z-[100] pageOverlay translate-y-[0%] rotate-90"></div> */}

      {/* <svg
          width="0"
          height="0"
          className="absolute left-0 top-0 pointer-events-none w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="semiTopClip" clipPathUnits="objectBoundingBox">
              <path d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z" />
            </clipPath>
          </defs>
        </svg> */}
    </main>
  );
}

function PicsContainer({ className }) {
  useEffect(() => {
    gsap.to(".pics-container", {
      y: "-200vh",
      repeat: -1,
      duration: 65,
      ease: "none",
    });
  }, []);

  return (
    <div className={`pics-container w-full h-[200vh] relative ${className}`}>
      {/* pic 1 */}
      <div className="loader-pic right-[15vw] top-0  ">
        <img src={pic_1} className="h-[224px]" alt="" />
      </div>

      {/* grey 1 */}
      <div className="loader-pic w-[177px] h-[128px] left-[-70px] top-[10vh]"></div>

      {/* pic 2 */}
      <div className="loader-pic left-[12.5vw] top-[34.3vh]">
        <img src={pic_2} className="h-[224px] " alt="" />
      </div>

      {/* grey 2 */}
      <div className="loader-pic w-[96px] h-[72px] right-[23.2vw] top-[54vh]"></div>

      {/* pic 3 */}
      <div className="loader-pic right-[1.6vw] bottom-[103vh]">
        <img src={pic_3} className="h-[175px] " alt="" />
      </div>

      {/* grey 3 */}
      <div className="loader-pic w-[96px] h-[72px] left-[33.6vw] top-[90vh]"></div>

      {/* pic 4 */}
      <div className="loader-pic left-[17.9vw] top-[115vh] ">
        <img src={pic_4} className="h-[196px] " alt="" />
      </div>

      {/* grey 4 */}
      <div className="loader-pic w-[98px] h-[128px] right-[33vw] top-[110vh]"></div>

      {/* pic 5 */}
      <div className="loader-pic right-[20.7vw] top-[152vh]">
        <img src={pic_5} className="h-[250px] " alt="" />
      </div>

      {/* grey 5 */}
      <div className="loader-pic w-[96px] h-[72px] left-[8.47vw] top-[160vh]"></div>
    </div>
  );
}
