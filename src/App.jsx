import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./pages/MainApp";

// Prioritize critical components
const LazyHeader = lazy(() => import("./components/layouts/landing/Header"));
const LazyHero = lazy(() =>
  Promise.all([
    import("./components/layouts/landing/Hero"),
    // Add a small delay to ensure critical resources load first
    new Promise((resolve) => setTimeout(resolve, 100)),
  ]).then(([module]) => module)
);

// Lower priority components with increasing delays
const LazyFooter = lazy(() => import("./components/layouts/landing/Footer"));
const LazyLogoTicker = lazy(() =>
  import("./components/layouts/landing/LogoTicker")
);
const LazyPricing = lazy(() => import("./components/layouts/landing/Pricing"));
const LazyProductShowcase = lazy(() =>
  import("./components/layouts/landing/ProductShowcase")
);
const LazyTestimonials = lazy(() =>
  import("./components/layouts/landing/Testimonials")
);
const LazyCallToAction = lazy(() =>
  import("./components/layouts/landing/CallToAction")
);
const LazyFAQ = lazy(() => import("./components/layouts/landing/FAQ"));

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
