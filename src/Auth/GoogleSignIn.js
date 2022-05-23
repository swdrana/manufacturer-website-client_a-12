import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const GoogleSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className=" px-8 pb-8">
        <button
          class="btn btn-primary w-full  btn-outline"
          onClick={() => signInWithGoogle()}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
