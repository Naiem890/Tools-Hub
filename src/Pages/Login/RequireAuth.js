import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import FullScreenLoading from "../Shared/FullScreenLoading";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <FullScreenLoading></FullScreenLoading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
