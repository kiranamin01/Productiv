import React from "react";
import ProductImage from "../assets/homepage-hero.png";

const ProductShowcase = () => {
  return (
    <div className="productshow_section flex justify-center items-center">
      <div className="product px-80 mx-10 my-10">
        <h1 className="text-3xl font-semibold text-center my-1 px-5  ">
          Boost your productivity today.
          <span className="text-3xl font-bold">
            {" "}
            Transform your workflow tomorrow.
          </span>
        </h1>
        <p className="text-2xl font-normal text-center my-1 py-5">
          From task management to team collaboration, and everything in between.
          Our AI-powered platform helps you streamline your work, automate
          repetitive tasks, and achieve more in less time.
        </p>

        <div className="ps_section_img flex justify-center items-center mt-15">
          <img
            src={ProductImage}
            alt="product_image"
            width={700}
            className="product"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
