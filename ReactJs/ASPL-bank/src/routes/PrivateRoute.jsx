// src/routes/PrivateRoute.jsx
import { useKeycloak } from "@react-keycloak/web";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { keycloak, initialized } = useKeycloak();
  const location = useLocation();

  // Wait until Keycloak is initialized
  if (!initialized) {
    return <div>Loading authentication...</div>;
  }

  // Not logged in? Trigger login and remember current page
  if (!keycloak.authenticated) {
    keycloak.login({ redirectUri: window.location.origin + location.pathname });
    return <div>Redirecting to login...</div>;
  }

  // If authenticated, show protected content
  return children;
};

export default PrivateRoute;
