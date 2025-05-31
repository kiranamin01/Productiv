import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./pages/MainApp";

// Prioritize critical components
const LazyHeader = lazy(() => import("./sections/Header"));
const LazyHero = lazy(() =>
  Promise.all([
    import("./sections/Hero"),
    // Add a small delay to ensure critical resources load first
    new Promise((resolve) => setTimeout(resolve, 100)),
  ]).then(([module]) => module)
);

// Lower priority components with increasing delays
const LazyFooter = lazy(() => import("./sections/Footer"));
const LazyLogoTicker = lazy(() => import("./sections/LogoTicker"));
const LazyPricing = lazy(() => import("./sections/Pricing"));
const LazyProductShowcase = lazy(() => import("./sections/ProductShowcase"));
const LazyTestimonials = lazy(() => import("./sections/Testimonials"));
const LazyCallToAction = lazy(() => import("./sections/CallToAction"));
const LazyFAQ = lazy(() => import("./sections/FAQ"));

// Custom loading component that doesn't cause layout shifts
const SectionLoader = () => (
  <div
    style={{
      minHeight: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className="loading-indicator"></div>
  </div>
);

const Home = () => {
  return (
    <>
      <LazyHeader />

      {/* Hero section is critical for LCP */}
      <Suspense fallback={<SectionLoader />}>
        <LazyHero />
      </Suspense>

      {/* Other sections can load progressively */}
      <Suspense fallback={<SectionLoader />}>
        <LazyLogoTicker />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LazyProductShowcase />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LazyTestimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LazyPricing />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LazyCallToAction />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LazyFAQ />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
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
