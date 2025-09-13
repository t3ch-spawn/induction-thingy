import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import quote from "@/assets/gray_quote.svg";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Navbar";

export default function Wishes() {
  let [wordCount, setWordCount] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const interval = setInterval(() => {
      const allWords = document.querySelectorAll(".wishes-word");

      setWordCount((prev) => {
        const next = prev === 2 ? 0 : prev + 1;

        allWords.forEach((word, idx) => {
          if (idx === next) {
            gsap.to(word, {
              opacity: 1,
              translateY: 0,
              delay: 0.3,
              ease: "power1.out",
            });
          } else {
            gsap
              .timeline()
              .to(word, {
                translateY: "-50%",
                ease: "power1.in",
              })
              .to(
                word,
                {
                  opacity: 0,
                  duration: 0.2,
                },
                "<0.2"
              )
              .to(word, { translateY: "50%" });
          }
        });

        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    let split = SplitText.create(".split", {
      type: "words",
      mask: "words",
      autoSplit: true,
      onSplit: (self) => {
        return gsap
          .timeline()
          .to("main", {
            backgroundColor: "white",
            duration: 1,
            delay: 0.1,
            ease: "power1.inOut",
          })
          .to(".heading-cont", {
            opacity: 1,
            duration: 0,
          })
          .from(self.words, {
            y: 80,
            stagger: 0.05,
            ease: "power2.out",
          })
          .from(
            ".quotes-cont",
            {
              y: 70,
              opacity: 0,
              ease: "power1.out",
            },
            "<0.7"
          )
          .from(".circles-cont", {
            opacity: 0,
          });
      },
    });

    // Animation for circle in sync with scroll

    const path = document.querySelector(".scroll-circle");

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength, // Total path length
      strokeDashoffset: pathLength, // Initially hide the path
    });

    // Animate the stroke-dashoffset to reveal the path as the user scrolls
    gsap.to(path, {
      strokeDashoffset: 0, // Fully reveal the path
      strokeDasharray: pathLength,
      ease: "none",
      scrollTrigger: {
        trigger: ".quotes-cont",
        scrub: true,
        start: "top 270px",
        end: "95% bottom",
      },
    });
  }, []);
  return (
    <main className="min-h-[100vh] w-full flex flex-col justify-center items-center instrument  pb-[100px] bg-black">
      <Navbar />

      {/* Heading */}
      <div className="bg-[white] heading-cont opacity-0 z-[3] w-full pt-[100px] top-0 mx-auto flex justify-center items-center sticky ">
        <h1 className="reckless text-[64px] leading-[130%] max-w-[922px] text-center split wishes-heading">
          Words of{" "}
          <span className="relative overflow-hidden">
            {" "}
            <span className="dummy opacity-0 px-[20px] ">Blessings</span>
            <span className="absolute center-x-y wishes-word opacity-100">
              Blessings,
            </span>
            <span className="absolute center-x translate-y-[50%] wishes-word opacity-0">
              Warmth,
            </span>
            <span className="absolute center-x translate-y-[50%] wishes-word opacity-0">
              Praise,
            </span>
          </span>
          Love, and Support
        </h1>
      </div>
      {/* Containe for words */}
      <div className="flex flex-col gap-[64px] justify-center items-center pt-[100px] quotes-cont relative z-[2]">
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
      </div>

      {/* Container for circles */}
      <div className="fixed bottom-[36px] right-[36px] z-[20] size-[36px] circles-cont">
        {/* Gray circle */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          className="absolute size-[36px] "
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.1" cx="18" cy="18" r="17.5" stroke="black" />
        </svg>

        {/* Black Circle */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          className="absolute size-[36px] rotate-[-90deg]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="scroll-circle"
            opacity="1"
            cx="18"
            cy="18"
            r="17.5"
            stroke="black"
          />
        </svg>
      </div>
    </main>
  );
}

function QuoteCont() {
  return (
    <div className="flex flex-col justify-center items-center gap-[28px] max-w-[450px] text-center">
      <img src={quote} className="mb-[36px] max-w-[216px]" alt="" />

      <p className="reckless leading-[135%] ">
        {" "}
        Demo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est
      </p>

      <p> — </p>

      <p className="text-[14px]">Akabuiro Blessing</p>
    </div>
  );
}
