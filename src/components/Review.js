import React from "react";

const Review = () => {
  return (
    <div>
      <div class="card card-compact w-64 bg-base-100 shadow-xl flex py-10 items-center">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
        <h2 class="card-title text-center my-4">Shoes!</h2>
        <div class="card-body">
          <p className="text-center">If a dog chews shoes whose shoes does he choose?</p>
          <div class="rating mx-auto">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
