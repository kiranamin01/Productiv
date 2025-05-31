import React from "react";
import Features from "@/components/mvpblocks/feature-1";

const ProductShowcase = () => {
  return (
    <>
      <section className="productshow_section flex justify-center items-center border-b-2">
        <div className="product px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 my-8 sm:my-12 md:my-20 lg:my-35">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center my-1 px-2 sm:px-3 md:px-5 tracking-wider">
            Boost your productivity today. <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Transform your workflow tomorrow.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 text-center my-1 py-3 sm:py-4 md:py-5 px-2 sm:px-4">
            From task management to team collaboration, and everything in
            between. Our AI-powered platform helps you streamline your work,
            automate repetitive tasks, and achieve more in less time.
          </p>
        </div>
      </section>
      <section>
        <Features />
      </section>
    </>
  );
};

export default ProductShowcase;