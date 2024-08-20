import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "react-oauth2-code-pkce";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { tokenData } = useContext(AuthContext);

  if (!tokenData) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
