import React from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();
  const user2 = JSON.parse(localStorage.getItem("user"));

  if (userLoading) return <Loading />;

  if (!user2) {
    // console.log(user2);
    // debugger;

    return <Navigate to="/landing" />;
  }

  return children;
};

export default ProtectedRoute;
