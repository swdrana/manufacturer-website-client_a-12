import { signOut } from "firebase/auth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";
const RequireNonAdmin = ({ children }) => {
    const [admin] = useAdmin();
  const location = useLocation();
  if (admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireNonAdmin;