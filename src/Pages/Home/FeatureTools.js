import React from "react";
import Product from "../../components/Product";

const FeatureTools = () => {
  return (
    <div>
      <div className="py-16 bg-lime-100">
        <h1 className="text-4xl text-center">Top Tools</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 gap-x-4 gap-y-10 place-items-center my-20">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default FeatureTools;
