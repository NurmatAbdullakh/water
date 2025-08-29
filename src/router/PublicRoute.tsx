import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../api/auth/AuthProvider";

export const PublicRoute = () => {
    const { user } = useAuth();

    return user ? <Navigate to="/" replace /> : <Outlet />;
};
