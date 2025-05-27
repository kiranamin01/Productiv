import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
const LazyApp = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./App")), 1);
    })
);
import Loader from "./Loader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <LazyApp />
    </Suspense>
  </StrictMode>
);

// Register service worker for offline capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
