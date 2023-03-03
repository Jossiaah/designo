import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AppDesign from "./Pages/AppDesign";
import GraphicDesign from "./Pages/GraphicDesign";
import WebDesign from "./Pages/WebDesign";
import Location from "./Pages/Location";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/appdesign" element={<AppDesign />} />
        <Route exact path="/graphicdesign" element={<GraphicDesign />} />
        <Route exact path="/webdesign" element={<WebDesign />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
};

export default App;