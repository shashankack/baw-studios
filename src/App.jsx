import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Works from "./pages/Works/works";
import WorksInternal from "./components/WorksInternal/WorksInternal";
import Branding from "./pages/Services/branding";
import Web from "./pages/Services/web";
import Contact from "./pages/Contact/contact";
import InteractiveMarquee from "./components/InteractiveMarquee/InteractiveMarquee";
import Social from "./pages/Services/social";
import { socialsData, worksData } from "./data";
import Test from "./components/Test/Test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/:slug" element={<WorksInternal />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/web" element={<Web />} />
        <Route path="/services/social" element={<Social />} />

        <Route path="/test" element={<Test data={worksData} />} />
      </Routes>
    </Router>
  );
};

export default App;
