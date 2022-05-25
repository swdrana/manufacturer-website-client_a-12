import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from './../components/Loading'

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  if(loading){
      return <Loading/>
  }
  return (
    <div className="w-full p-10  lg:w-1/2 mx-auto">
      <form onSubmit="" className="card-body pb-0">
        <div class="avatar mx-auto flex-col items-center gap-3">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt={user?.displayName} />
          </div>
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        </div>
        <div class="rating mx-auto">
            <input type="radio" name="reviewRating" class="mask mask-star-2 bg-primary" />
            <input type="radio" name="reviewRating" class="mask mask-star-2 bg-primary" />
            <input type="radio" name="reviewRating" class="mask mask-star-2 bg-primary" />
            <input type="radio" name="reviewRating" class="mask mask-star-2 bg-primary" />
            <input type="radio" name="reviewRating" class="mask mask-star-2 bg-primary" />
        </div>
        <textarea class="textarea textarea-primary h-40 my-3" placeholder="Your Review"></textarea>

        <div className="form-control mt-1">
          <button className="btn btn-primary">Add Review</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
