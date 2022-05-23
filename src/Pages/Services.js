import React from "react";
import Product from "../components/Product";

const Services = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 gap-x-4 gap-y-10 place-items-center my-20">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Services;