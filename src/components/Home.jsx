import React from "react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TransitionOverlay } from "./TransitionLink";

export default function Home() {
  useGSAP(() => {
    gsap.to(".home-page", {
      opacity: 1,
    });
  }, []);
  return (
    <div className="home-page opacity-0">
      <Navbar />

      <main></main>

      <TransitionOverlay className="bg-black" />
    </div>
  );
}
