import React, { useEffect, useRef } from "react";
import InfiniteGrid from "./infinitegrid";

export default function InfiniteGridWrapper({ sources, data, originalSize }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // set CSS variable on resize
    const resize = () => {
      document.documentElement.style.setProperty(
        "--rvw",
        `${document.documentElement.clientWidth / 100}px`
      );
    };

    window.addEventListener("resize", resize);
    resize();

    // create the InfiniteGrid instance
    const grid = new InfiniteGrid({
      el: containerRef.current,
      sources,
      data,
      originalSize: { w: 1522, h: 1238 },
    });

    return () => {
      grid.destroy();
      window.removeEventListener("resize", resize);
    };
  }, [sources, data, originalSize]);

  return (
    <div ref={containerRef} id="images" className=""></div>
  );
}
