import React from "react";

const Review = () => {
  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl flex py-10 items-center mx-16 md:mx-28 lg:mx-0">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
        <h2 className="card-title text-center my-4">Shoes!</h2>
        <div className="card-body">
          <p className="text-center">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="rating mx-auto">
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              readOnly
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
