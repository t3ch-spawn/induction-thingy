import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Loader from "./components/Loader";
import Wishes from "./components/Wishes";
import { Routes, Route, Link } from "react-router-dom";
import Lenis from "lenis";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);
  // Initialize Lenis


  useEffect(() => {
    // window.addEventListener("popstate", () => {
    //   console.log(
    //     "User used back/forward button. New URL:",
    //     window.location.href
    //   );
    // });
  }, []);

  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
