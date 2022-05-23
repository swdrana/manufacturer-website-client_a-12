import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
  const handelForm = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <div className=" min-h-screen bg-base-200 flex-col w-full flex items-center">
        <h1 className="text-4xl my-4">Create Account</h1>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-5/6 lg:w-2/6">
          <form onSubmit={handelForm} className="card-body pb-0">
            {/* Name Section  */}
            <div className="flex gap-1">
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Email  */}
            <div className="form-control">
              <input
                type="email"
                placeholder="E-mail"
                className="input input-bordered"
                required
              />
            </div>

            {/* Phone  */}
            <div className="form-control">
              <input
                type="tel"
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>

            <div className="flex gap-1">
              <div className="form-control w-1/2">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <input
                  type="password"
                  placeholder="Conform Password"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <input
                type="file"
                placeholder="Photos"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already Account?
              </Link>
            </label>
            <div className="form-control mt-1">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
