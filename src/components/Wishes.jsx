import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import quote from "@/assets/gray_quote.svg";

export default function Wishes() {
  let [wordCount, setWordCount] = useState(0);

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
  return (
    <main className="min-h-[100vh] flex flex-col justify-center items-center instrument  pb-[100px]">
      {/* Heading */}

      <div className="bg-white w-full pt-[100px] top-0 mx-auto flex justify-center items-center sticky">
        <h1 className="reckless text-[64px] leading-[130%] max-w-[922px] text-center">
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
      <div className="flex flex-col gap-[64px] justify-center items-center pt-[100px]">
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
        <QuoteCont />
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
