import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Loader from "./components/Loader";
import Wishes from "./components/Wishes";
import { Routes, Route, Link } from "react-router-dom";
import Lenis from "lenis";

function App() {
  const [count, setCount] = useState(0);
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </>
  );
}

export default App;
