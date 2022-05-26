import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
  const [user] = useAuthState(auth);

  if(user){
    const email = user.email;
    console.log(user);   
    // send updated product to database
    if(email!==null){

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
        // e.target.reset();
      });
    }






    // make admin if user CEO
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
  const handelForm = (e) => {
    e.preventDefault();
    const fName = e.target.fname.value;
    const lName = e.target.lname.value;
    const eMail = e.target.email.value;
    const password = e.target.password.value;
    const cPassword = e.target.conformpassword.value;
    const photo = e.target.photo.value;
    console.log(fName, lName, eMail, password, cPassword, photo);
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
                  name="fname"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
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
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Phone  */}
            <div className="form-control">
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
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
                  name="password"
                />
              </div>
              <div className="form-control w-1/2">
                <input
                  type="password"
                  placeholder="Conform Password"
                  name="conformpassword"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <input
                type="file"
                placeholder="Photos"
                name="photo"
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
