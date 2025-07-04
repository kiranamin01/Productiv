import React, { useState } from "react";
import TailwindLogo from "@/assets/logos/tailwindcss.webp";
import ReactLogo from "@/assets/logos/react.webp";
import ShadcnLogo from "@/assets/logos/shadcn.webp";
import RapidAPILogo from "@/assets/logos/rapidApi.webp";
import ClaudeLogo from "@/assets/logos/claudeAi.webp";
import HtmlLogo from "@/assets/logos/html.webp";
import CssLogo from "@/assets/logos/css.webp";
import JavascriptLogo from "@/assets/logos/js.webp";
import FigmaLogo from "@/assets/logos/figma.webp";
import VscodeLogo from "@/assets/logos/vscode.webp";
import GithubLogo from "@/assets/logos/git.webp";
import VercelLogo from "@/assets/logos/vercel.webp";
import FramermotionLogo from "@/assets/logos/framermotion.webp";
import LucideLogo from "@/assets/logos/lucide.webp";

const LogoTicker = () => {
  const logos = [
    { src: ReactLogo, alt: "React", name: "React" },
    { src: TailwindLogo, alt: "Tailwind CSS", name: "Tailwind CSS" },
    { src: ShadcnLogo, alt: "Shadcn UI", name: "Shadcn UI" },
    { src: RapidAPILogo, alt: "RapidAPI", name: "RapidAPI" },
    { src: ClaudeLogo, alt: "Claude AI", name: "Claude AI" },
    { src: HtmlLogo, alt: "HTML", name: "HTML5" },
    { src: CssLogo, alt: "CSS", name: "CSS3" },
    { src: JavascriptLogo, alt: "JavaScript", name: "JavaScript" },
    { src: FigmaLogo, alt: "Figma", name: "Figma" },
    { src: VscodeLogo, alt: "VS Code", name: "VS Code" },
    { src: GithubLogo, alt: "GitHub", name: "GitHub" },
    { src: VercelLogo, alt: "Vercel", name: "Vercel" },
    { src: LucideLogo, alt: "Lucide", name: "Lucide" },
    { src: FramermotionLogo, alt: "Framer Motion", name: "Framer Motion" },
  ];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="border border-gray-300 dark:border-gray-200/10 overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="flex flex-col gap-4 my-10 mx-5">
        <div className="text mb-8 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Our Tech Stack
          </h1>
          <p className="text-xl mt-2 text-gray-600 dark:text-gray-300">
            Powered by cutting-edge technologies to deliver exceptional
            performance
          </p>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div
            className={`py-6 ${
              !isPaused ? "animate-scroll" : ""
            } flex whitespace-nowrap`}
          >
            {[...Array(2)].map((_, setIndex) =>
              logos.map((logo, index) => (
                <div
                  key={`logo-${setIndex}-${index}`}
                  className="inline-flex flex-col items-center mx-6 group/logo"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl p-3 shadow-lg hover:shadow-xl hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover/logo:from-primary/30 group-hover/logo:to-secondary/30 rounded-xl transition-all duration-300" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 opacity-100 transition-all duration-300 transform translate-y-0 group-hover/logo:text-primary">
                    {logo.name}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
