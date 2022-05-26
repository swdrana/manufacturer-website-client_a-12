import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useUserInfo from "../hooks/useUserInfo";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useUserInfo(user?.email);
  // console.log(user);
  if (loading) {
    return <p>Loading</p>;
  }
  console.log(userInfo);
  return (
    <div>
      <div className=" bg-base-200 flex-col flex items-center">
        <h1 className="text-4xl my-4">My Info</h1>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-3/4 lg:w-2/3 justify-center items-center">
          <div className="flex items-center bg-slate-200 w-full">
            <div class="avatar p-5 pr-0 w-1/4">
              <div class=" w-36 mask mask-hexagon">
                <img src={userInfo?.photoURL} alt={userInfo?.displayName} />
              </div>
            </div>
            {/* Name Section  */}
            <div>
              <h1 className="text-4xl font-bold">{userInfo?.displayName}</h1>
              <p>{userInfo?.email}</p>
            </div>
          </div>

          {/* Aditional Info  */}
          <div class="overflow-x-auto w-full">
                {/* <!-- row 1 --> */}
                <div className="w-full flex flex-row">
                  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                    <div class="font-bold">Address</div>
                    <div class="text-sm opacity-50">Add2</div>
                  </div>
                  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                    {userInfo?.address}
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      {userInfo?.address2}
                    </span>
                  </div>
                </div>
                {/* <!-- row 2 --> */}
                <div className="w-full flex flex-row">
                  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                    <div class="font-bold">Phone</div>
                  </div>
                  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                    {userInfo?.phone}
                  </div>
                </div>
                {/* <!-- row 2 --> */}
                <div className="w-full flex flex-row">
                  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                    <div class="font-bold">Facebook</div>
                  </div>
                  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                    {userInfo?.facebook}
                  </div>
                </div>
                {/* <!-- row 2 --> */}
                <div className="w-full flex flex-row">
                  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                    <div class="font-bold">GitHub</div>
                  </div>
                  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                    {userInfo?.github}
                  </div>
                </div>
                {/* <!-- row 2 --> */}
                <div className="w-full flex flex-row">
                  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                    <div class="font-bold">Linkedin</div>
                  </div>
                  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                    {userInfo?.linkedin}
                  </div>
                </div>
                {/* <!-- row 2 --> */}
                <div className="w-full flex flex-row">
                  <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                    <div class="font-bold">Twitter</div>
                  </div>
                  <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                    {userInfo?.twitter}
                  </div>
                </div>
                {/* <!-- row 2 --> */}
                  <div className=" flex flex-row justify-evenly items-center px-5 lg:px-10 py-5">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-secondary">Save</button>
                  </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
