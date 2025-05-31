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
    { src: ReactLogo, alt: "React Logo", width: 100, height: 100 },
    { src: TailwindLogo, alt: "Tailwind CSS Logo", width: 100, height: 100 },
    {
      src: ShadcnLogo,
      alt: "Shadcn UI Logo",
      width: 500,
      height: 500,
    },
    {
      src: RapidAPILogo,
      alt: "RapidAPI Logo",
      width: 900,
      height: 900,
    },
    {
      src: ClaudeLogo,
      alt: "Claude AI Logo",
      width: 900,
      height: 900,
    },
    {
      src: HtmlLogo,
      alt: "HTML Logo",
      width: 150,
      height: 150,
    },
    {
      src: CssLogo,
      alt: "CSS Logo",
      width: 150,
      height: 150,
    },
    {
      src: JavascriptLogo,
      alt: "JavaScript Logo",
      width: 150,
      height: 150,
    },
    {
      src: FigmaLogo,
      alt: "Figma Logo",
      width: 150,
      height: 150,
    },
    {
      src: VscodeLogo,
      alt: "VS Code Logo",
      width: 150,
      height: 150,
    },
    {
      src: GithubLogo,
      alt: "GitHub Logo",
      width: 150,
      height: 150,
    },
    {
      src: VercelLogo,
      alt: "Vercel Logo",
      width: 150,
      height: 150,
    },
    {
      src: LucideLogo,
      alt: "Lucide Logo",
      width: 150,
      height: 150,
    },
    {
      src: FramermotionLogo,
      alt: "Framer Motion Logo",
      width: 150,
      height: 150,
    },
  ];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="border border-gray-300 dark:border-gray-200/10 overflow-hidden">
      <div className="flex flex-col gap-4 my-10 mx-5">
        <div className="text mb-8 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold">Our Tech Stack</h1>
          <p className="text-xl mt-2">
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
            {logos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="logo-ticker-img w-18 h-18 transition-all duration-300 bg-primary/50 hover:bg-primary/90 rounded-full p-2 mx-6 hover:cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                loading="lazy"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`logo-2-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="logo-ticker-img w-18 h-18 hover:grayscale-0 transition-all duration-300 bg-primary/50 hover:bg-primary/90 rounded-full p-2 mx-6 hover:cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
