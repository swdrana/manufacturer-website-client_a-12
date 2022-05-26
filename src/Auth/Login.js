import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import GoogleSignIn from "./GoogleSignIn";
const Login = () => {
  const [user] = useAuthState(auth);
  if(user){
    const email = user.email;
    console.log(user);   
    // send updated product to database
    if(email!==null){
    // update user info 
    fetch(`http://localhost:8080/newUser/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.info("Updated Done!", { theme: "colored" });
      });
    }


    // make automatic admin if user CEO
    if(email===process.env.REACT_APP_ceoEmail){
      const makeAdmin = { isAdmin: true };
      fetch(`http://localhost:8080/newUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(makeAdmin),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }
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
                <Link to="#" className="label-text-alt link link-hover">
                  Reset Password!
                </Link>
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
