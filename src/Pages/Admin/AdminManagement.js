import React from "react";
import useUsers from "../../hooks/useUsers";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";

const AdminManagement = () => {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useUsers();
  if(loading){
      return <Loading/>
  }
  const makeAdmin = (email) => {
    const user = { isAdmin: true };
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

        toast.success("Admin Added!", { theme: "colored" });
        // e.target.reset();
      });
  };
  const removeAdmin = (email) => {
      if(email===user.email){
          toast.error("Can't Remove Your Self!");
      }else{

    const updateUser = { isAdmin: false };
    fetch(`http://localhost:8080/newUser/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.info("Admin Removed!", { theme: "colored" });
        // e.target.reset();
      });
      }
  };
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Address</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const {
                _id,
                displayName,
                photoURL,
                email,
                address,
                phone,
                isAdmin,
              } = user;
              //   console.log(user);
              return (
                <tr key={_id}>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src={photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">{displayName}</div>
                        <div class="text-sm opacity-50">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {address}
                    <br />
                    <span class="badge badge-ghost badge-sm">{phone}</span>
                  </td>
                  <th className="">
                    <div className="flex justify-center items-center">
                      {isAdmin === true ? (
                        <button
                          class="btn btn-secondary btn-xs"
                          onClick={() => removeAdmin(email)}
                        >
                          Remove Admin
                        </button>
                      ) : (
                        <button
                          class="btn btn-success btn-xs"
                          onClick={() => makeAdmin(email)}
                        >
                          Make Admin
                        </button>
                      )}
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManagement;
