import React from "react";
import HomePageHero from "../assets/homepage-hero.png";

const Hero = () => {
  return (
    <section className="flex pt-8 pb-20 bg-[radial-gradient(ellipse_200%_67%_at_bottom_left,#183Ec2,#EAEEFE_86%)]">
      <div className="hero_text  flex">
        <div className="container flex my-10 mx-2">
          <div className="hero_box flex justify-between items-center">
            <div className="hero_text">
              <button className="border border-black/20 rounded-full shadow-2xl text-black/50 px-2 py-1 ">
                {" "}
                Version 2.0 is here
              </button>
              <h1 className="font-Bentham font-bold tracking-tighter text-7xl m-5">
                The all-in-one Productivity Management App.
              </h1>
              <h3 className="text-2xl">
                Streamline your workflow, boost focus, and achieve more with our
                intelligent productivity platform that helps you organize tasks,
                manage time, and maximize your daily potential.
              </h3>

              <div className="hero_btn flex items-center gap-2 py-4">
                <button
                  className="border border-black/20 rounded-full  text-black px-4 py-2
                               mx-2 text-semibold"
                >
                  Get a Demo
                </button>
                <h4>
                  Learn More{" "}
                  {/* <ArrowRight className="h-8 w-7 inline-flex justify-center items-center" /> */}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero_img">
        <img src={HomePageHero} alt="hero image" height={1200} width={1000} />
      </div>
    </section>
  );
};

export default Hero;
