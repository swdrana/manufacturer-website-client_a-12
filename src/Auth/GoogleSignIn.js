import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  if (loadingGoogle) {
    //   return <Loading/>
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className=" px-8 pb-8">
        <button
          className="btn btn-primary w-full  btn-outline"
          onClick={() => signInWithGoogle()}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;