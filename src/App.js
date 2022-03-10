import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import About from "./components/About";
import Archive from "./components/Archive";
import Hero from "./components/Hero";
import Top from "./components/Top";
import Results from "./components/Results";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <nav className="p-4 bg-black text-white ">
          <ul className="flex-rows">
            <Link to="/">
              {" "}
              <li className="m-2 ">home</li>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <li className="m-2">about</li>{" "}
            </Link>
            <Link to="/archive">
              {" "}
              <li className="m-2">archive</li>{" "}
            </Link>
          </ul>
        </nav>
        <Top />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/results/:queryName" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
