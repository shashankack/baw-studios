import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import { lazy } from "react";

const About = lazy(() => import('./pages/About/about'));
// const Services = lazy(() => import('./pages/Services'));
// const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
