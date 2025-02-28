import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Works from "./pages/Works/works";
import Branding from "./pages/Services/branding";

import InteractiveCarousel from "./components/WorksInternal/InteractiveCarousel";
import { worksData } from "./data";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route
          path="/test"
          element={<InteractiveCarousel data={worksData} direction="top" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
