import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "./components/layout/SmoothScroll";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/layout/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JobPortal from "./pages/services/JobPortal";
import Recruitment from "./pages/services/Recruitment";
import Training from "./pages/services/Training";
import Industries from "./pages/services/Industries";

function Layout() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <Nav />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/job-portal" element={<JobPortal />} />
          <Route path="/services/recruitment" element={<Recruitment />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/industries" element={<Industries />} />
        </Routes>
      </PageTransition>
      <Footer />
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
