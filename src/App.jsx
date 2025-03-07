import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Works from "./pages/Works/works";
import WorksInternal from "./components/WorksInternal/WorksInternal";
import Branding from "./pages/Services/branding";
import Web from "./pages/Services/web";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:slug" element={<WorksInternal />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/web" element={<Web />} />
      </Routes>
    </Router>
  );
};

export default App;
