import React from "react";
import Feather from "@/components/mvpblocks/feature-1";

const ProductShowcase = () => {
  return (
    <>
      <section className="productshow_section flex justify-center items-center border-b-2">
        <div className="product px-80 my-35 mx-35">
          <h1 className="text-3xl font-semibold text-center my-1 px-5 tracking-wider">
            Boost your productivity today. <br />
            <span className="text-4xl font-bold ">
              {" "}
              Transform your workflow tomorrow.
            </span>
          </h1>
          <p className="text-2xl font-normal text-center my-1 py-5">
            From task management to team collaboration, and everything in
            between. Our AI-powered platform helps you streamline your work,
            automate repetitive tasks, and achieve more in less time.
          </p>
        </div>
      </section>
      <section>
        <Feather />
      </section>
    </>
  );
};

export default ProductShowcase;
