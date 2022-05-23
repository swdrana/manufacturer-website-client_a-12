import React from "react";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  return (
      <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col w-full">
        <h1 className="text-4xl">Welcome Back!</h1>
        <div class="card flex-shrink-0 shadow-2xl bg-base-100 w-2/3 lg:w-1/3">
          <div class="card-body pb-0">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
          <div class="divider">OR</div>
          <GoogleSignIn/>
        </div>
      </div>
    </div>
  );
};

export default Login;
