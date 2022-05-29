import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import FullScreenLoading from "../Shared/FullScreenLoading";

const RequireAdmin = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [isAdmin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <FullScreenLoading></FullScreenLoading>;
  }
  if (!user || !isAdmin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
