import React from "react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

      <div className="fixed w-[100vw] h-[250vh] top-0 bg-black z-[100] pageOverlay translate-y-[100vh]"></div>
    </div>
  );
}
