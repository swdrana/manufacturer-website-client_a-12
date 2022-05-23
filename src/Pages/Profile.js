import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const fullname = user?.displayName.split(" ");
  console.log(user);
  if (loading) {
    return console.log(1);
  }
  return (
    <div>
      <div className=" min-h-screen bg-base-200 flex-col w-full flex items-center">
        <h1 className="text-4xl my-4">My Info</h1>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-5/6 lg:w-2/6 py-10">
          {/* Name Section  */}
          <div className="flex gap-1">
            <div className="form-control w-1/2">
              <input
                type="text"
                value={fullname?.[0]}
                disabled
                placeholder="First Name"
                name="fname"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                value={fullname?.[1]}
                disabled
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
              value={user?.email}
              disabled
              placeholder="E-mail"
              name="email"
              className="input input-bordered"
              required
            />
          </div>

          <img src={user?.photoURL} className="w-1/2 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
