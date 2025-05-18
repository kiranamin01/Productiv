import CallToAction from "../src/sections/CallToAction";
import Footer from "../src/sections/Footer";
import Header from "../src/sections/Header";
import Hero from "../src/sections/Hero";
import LogoTicker from "../src/sections/LogoTicker";
import Pricing from "../src/sections/Pricing";
import ProductShowcase from "../src/sections/ProductShowcase";
import Testimonials from "../src/sections/Testimonials";
import FAQ from "../src/sections/FAQ";
import Dashboard from "../src/pages/dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <LogoTicker />
            <ProductShowcase />
            <Testimonials />
            <Pricing />
            <CallToAction />
            <FAQ />
            <Footer />
          </>
        } />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
