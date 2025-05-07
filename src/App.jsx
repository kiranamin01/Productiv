import CallToAction from "../src/sections/CallToAction";
import Footer from "../src/sections/Footer";
import Header from "../src/sections/Header";
import Hero from "../src/sections/Hero";
import LogoTicker from "../src/sections/LogoTicker";
import Pricing from "../src/sections/Pricing";
import ProductShowcase from "../src/sections/ProductShowcase";
import Testimonials from "../src/sections/Testimonials";

import Dashboard from "../src/pages/dashboard.jsx";

function App() {
  return (
    <>
      <Dashboard />
      <Header />
      <Hero />
      <ProductShowcase />
      <Pricing />
      <LogoTicker />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
