import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";

// Lazy-load your page components
const Home = lazy(() => import("./pages/Home/home"));
// const About = lazy(() => import('./pages/About'));
// const Services = lazy(() => import('./pages/Services'));
// const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<Loader nextComponent={<Home />} />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
