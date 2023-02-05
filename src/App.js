// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Footer from "./Components/Reusables/Footer";
import NotFound from "./Components/Reusables/NotFound";

function App() {
  return (
    <Router>
      <div className="container h-full m-auto"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
