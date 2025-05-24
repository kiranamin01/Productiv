import CallToAction from "../src/sections/CallToAction";
import Footer from "../src/sections/Footer";
import Header from "../src/sections/Header";
import Hero from "../src/sections/Hero";
import LogoTicker from "../src/sections/LogoTicker";
import Pricing from "../src/sections/Pricing";
import ProductShowcase from "../src/sections/ProductShowcase";
import Testimonials from "../src/sections/Testimonials";
import FAQ from "../src/sections/FAQ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./pages/MainApp";

// Create a Home component that combines all landing page sections
const Home = () => {
  return (
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
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
