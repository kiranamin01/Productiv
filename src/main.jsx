import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Import Loader before using it
import Loader from "@/components/atoms/Loader";

// Preload the App component immediately
const preloadPromise = import("./App");

// Lazy load the App component with priority
const LazyApp = lazy(() =>
  import("./App").then((module) => {
    // Mark this module as high priority for the browser
    if (
      window.navigator &&
      window.navigator.connection &&
      "saveData" in window.navigator.connection
    ) {
      // @ts-ignore
      // window.navigator.connection.saveData = false;
    }
    return module;
  })
);

// Add loading animation to the stylesheet
const style = document.createElement("style");
style.textContent = `
  @keyframes loadingProgress {
    0% { width: 0; opacity: 1; }
    50% { width: 50%; opacity: 0.8; }
    100% { width: 100%; opacity: 0; }
  }
`;
document.head.appendChild(style);

// Create a lightweight initial content for immediate display
const initialContent = document.createElement("div");
initialContent.id = "initial-content";
initialContent.innerHTML = `
  <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #000;">
    <div style="text-align: center;">
      <div style="font-size: 24px; margin-bottom: 16px; color: #fff;">Productiv.ai</div>
      <div style="width: 200px; height: 6px; background-color: #333; border-radius: 3px; overflow: hidden;">
        <div style="width: 0; height: 100%; background-color: #6366f1; animation: loadingProgress 2s ease-in-out infinite;"></div>
      </div>
    </div>
  </div>
`;
document.body.appendChild(initialContent);

// Render the app with optimized Suspense
const root = createRoot(document.getElementById("root"));

// Remove initial content and render app when ready
preloadPromise.then(() => {
  // Remove initial content after app is preloaded
  if (initialContent.parentNode) {
    initialContent.parentNode.removeChild(initialContent);
  }

  // Render the app
  root.render(
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <LazyApp />
      </Suspense>
    </StrictMode>
  );
});

// Register service worker with improved strategy
if ("serviceWorker" in navigator) {
  const registerSW = () => {
    navigator.serviceWorker
      .register("/service-worker.js", {
        scope: "/",
        updateViaCache: "none", // Always check for updates
      })
      .then((registration) => {
        console.log("SW registered: ", registration);
        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000); // Check every hour
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  };

  // Use requestIdleCallback if available, otherwise use a timeout
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(registerSW, { timeout: 2000 });
  } else {
    // Wait for the page to be fully loaded
    window.addEventListener("load", () => {
      setTimeout(registerSW, 2000);
    });
  }
}
