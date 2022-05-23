import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <h1 className="text-4xl">Welcome Back!</h1>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-2/3 lg:w-1/3">
          <div className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Reset Password!
                </a>
              </label>
              <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                New Here?
              </Link>
              </label>
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
          <div className="divider">OR</div>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
