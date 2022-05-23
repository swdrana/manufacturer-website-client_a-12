import React from "react";

const Product = () => {
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>
            If a dog chews shoes whose shoes does he choose? If a dog chews
            shoes whose shoes does he choose? If a dog chews shoes whose shoes
            does he choose?
          </p>
          <div className="flex justify-evenly text-center">
            <div className=" w-1/3">
              <p className=" text-secondary">
                Minimum
                <span className=" text-red-600 font-extrabold text-xl block">
                  100
                </span>{" "}
                Quantity{" "}
              </p>
            </div>
            <div className=" w-1/3">
              <p className=" text-secondary">
                Available
                <span className=" text-lime-600 font-extrabold text-xl block">
                  1900
                </span>{" "}
                Items{" "}
              </p>
            </div>
            <div className=" w-1/3">
              <p className=" text-secondary">
                Price
                <span className=" text-blue-600 font-extrabold text-xl block">
                  {" "}
                  $120
                </span>{" "}
                Per unit{" "}
              </p>
            </div>
          </div>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
