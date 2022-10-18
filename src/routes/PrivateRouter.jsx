import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading)
    return <h1 className="animate__animated animate__flash">LOADING...</h1>;

  return user ? children : <Navigate to="/login" />;
};
