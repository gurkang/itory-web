import React from "react";
import { useGetBoxesQuery } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";

type AuthWrapperProps = {
  children: React.ReactNode;
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const nav = useNavigate();
  const { error, loading } = useGetBoxesQuery();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    nav("/login");
  }
  return <>{children}</>;
};
export default AuthWrapper;
