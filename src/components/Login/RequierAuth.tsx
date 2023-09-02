import { ReactNode } from "react"; // Import ReactNode
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: ReactNode; // Specify children prop type as ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const tokenUser = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!tokenUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return <>{children}</>; // Wrap children in <></> to make it JSX
};

export default RequireAuth;
