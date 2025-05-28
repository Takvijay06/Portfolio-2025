import { Navigate, Outlet } from "react-router";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export default function AuthGuard() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}
