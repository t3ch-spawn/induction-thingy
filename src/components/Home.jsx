import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TransitionOverlay } from "./TransitionLink";
import InfiniteGridWrapper from "./InfiniteGridWrapper";
import image_1 from "@/assets/image-1.jpg";
import image_2 from "@/assets/image-2.jpg";
import image_3 from "@/assets/image-3.jpg";
import image_4 from "@/assets/image-4.jpg";
import image_5 from "@/assets/image-5.jpg";
import image_6 from "@/assets/image-6.jpg";
import image_7 from "@/assets/image-7.jpg";
import image_8 from "@/assets/image-8.jpg";
import image_9 from "@/assets/image-9.jpg";

export default function Home() {
  useGSAP(() => {
    gsap.to(".home-page", {
      opacity: 1,
    });
  }, []);

  const data = [
    { x: 71, y: 58, w: 400, h: 270 },
    { x: 211, y: 255, w: 540, h: 360 },
    { x: 631, y: 158, w: 400, h: 270 },
    { x: 1191, y: 245, w: 260, h: 195 },
    { x: 351, y: 687, w: 260, h: 290 },
    { x: 751, y: 824, w: 205, h: 154 },
    { x: 911, y: 540, w: 260, h: 350 },
    { x: 1051, y: 803, w: 400, h: 300 },
    { x: 71, y: 922, w: 350, h: 260 },
  ];

  const sources = [
    {
      src: image_1,
      caption:
        "30 knots <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2021",
    },
    {
      src: image_2,
      caption:
        "Sad Mis-Step <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2024",
    },
    {
      src: image_3,
      caption:
        "Mini Orange <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2014",
    },
    {
      src: image_4,
      caption:
        "After Storm <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2022",
    },
    {
      src: image_5,
      caption:
        "Untitled <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2016",
    },
    {
      src: image_6,
      caption:
        "Toilet Paper <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2022",
    },
    {
      src: image_7,
      caption:
        "Cocoa Eggplant Tomato <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2025",
    },
    {
      src: image_8,
      caption:
        "Toilet Paper <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2022",
    },
    {
      src: image_9,
      caption:
        "Production Fun Fact (Eggs) <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2024",
    },
  ];

  return (
    <div className="home-page opacity-0">
      <Navbar />

      <main className="w-full h-[100vh] overflow-hidden home-main cursor-grab">
        <InfiniteGridWrapper sources={sources} data={data} />
      </main>

      <TransitionOverlay className="bg-black" />
    </div>
  );
}
