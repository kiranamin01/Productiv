import React from "react";
import TailwindLogo from "../assets/logos/tailwindcss.png";
import ReactLogo from "../assets/logos/react.png";
import ShadcnLogo from "../assets/logos/shadcn.jpg";
import RapidAPILogo from "../assets/logos/rapidApi.png";
import ClaudeLogo from "../assets/logos/claudeAi.png";
import HtmlLogo from "../assets/logos/html.png";
import CssLogo from "../assets/logos/css.png";
import JavascriptLogo from "../assets/logos/js.png";
import FigmaLogo from "../assets/logos/figma.png";
import VscodeLogo from "../assets/logos/vscode.png";
import GithubLogo from "../assets/logos/git.png";
import VercelLogo from "../assets/logos/vercel.png";
import FramermotionLogo from "../assets/logos/framermotion.png";
import LucideLogo from "../assets/logos/lucide.png";

const LogoTicker = () => {
  const logos = [
    {
      src: ReactLogo,
      alt: "React Logo",
      width: 250,
      height: 250,
    },
    {
      src: TailwindLogo,
      alt: "Tailwind CSS Logo",
      width: 350,
      height: 350,
    },
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

  return (
    <section className="border border-gray-300 dark:border-gray-200/10 overflow-hidden">
      <div className="flex flex-col gap-4 my-10 mx-5">
        <div className="text mb-8 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold">Our Tech Stack</h1>
          <p className="text-xl mt-2">
            We use the latest technologies to build our products.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="py-6 animate-scroll flex whitespace-nowrap">
            {logos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="logo-ticker-img w-auto h-18 transition-all duration-300 bg-primary/40 hover:bg-primary/80 rounded-full p-2 mx-6"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`logo-2-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="logo-ticker-img w-auto h-18 hover:grayscale-0 transition-all duration-300 bg-orange-300/10 hover:bg-orange-300 rounded-full p-2 mx-6"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
