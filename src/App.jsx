// import CallToAction from "../src/sections/CallToAction";
// import Footer from "../src/sections/Footer";
// import Header from "../src/sections/Header";
// import Hero from "../src/sections/Hero";
// import LogoTicker from "../src/sections/LogoTicker";
// import Pricing from "../src/sections/Pricing";
// import ProductShowcase from "../src/sections/ProductShowcase";
// import Testimonials from "../src/sections/Testimonials";
// import FAQ from "../src/sections/FAQ";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./pages/MainApp";
import { Loader } from "lucide-react";

// Create a Home component that combines all landing page sections
// Lazy load components
const LazyCallToAction = lazy(() => import("../src/sections/CallToAction"));
const LazyFooter = lazy(() => import("../src/sections/Footer"));
const LazyHeader = lazy(() => import("../src/sections/Header"));
const LazyHero = lazy(() => import("../src/sections/Hero"));
const LazyLogoTicker = lazy(() => import("../src/sections/LogoTicker"));
const LazyPricing = lazy(() => import("../src/sections/Pricing"));
const LazyProductShowcase = lazy(() =>
  import("../src/sections/ProductShowcase")
);
const LazyTestimonials = lazy(() => import("../src/sections/Testimonials"));
const LazyFAQ = lazy(() => import("../src/sections/FAQ"));

const Home = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <p className="opacity-0">Loading...</p>
          </div>
        }
      >
        <LazyHeader />
        <LazyHero />
        <LazyLogoTicker />
        <LazyProductShowcase />
        <LazyTestimonials />
        <LazyPricing />
        <LazyCallToAction />
        <LazyFAQ />
        <LazyFooter />
      </Suspense>
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
