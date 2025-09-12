"use client";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function TransitionLink({
  children,
  href,
  className,
  onClick,
  hasNavReversed,
}) {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  function handleTransition(e) {
    if (onClick) {
      onClick();
    }

    if (pathname == href) {
      return;
    }

    e.preventDefault();
    pageTransition();
  }

  function pageTransition() {
    if (pathname == href) {
      return;
    }

    gsap.timeline().to(".pageOverlay", {
      y: "-5%",
      duration: 1.5,
      ease: "power3.inOut",
  
    });

    const transTl = gsap
      .timeline()
      .to(".pageOverlay", {
        clipPath: "ellipse(50% 100% at  50% 100%)",
        ease: "power1.inOut",
        duration: 0.6,
      })
      .to(".pageOverlay", {
        clipPath: "ellipse(165% 100% at  50% 100%)",
        ease: "power1.in",
        onComplete: () => {
          navigate(href);
        },
        duration: 0.9,
      });
  }

  return (
    <a className={`${className}`} onClick={handleTransition} href={href}>
      {children}
    </a>
  );
}
