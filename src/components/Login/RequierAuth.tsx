import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const tokenUser = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!tokenUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return children;
};

export default RequireAuth;
