import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../api/auth/AuthProvider";

export const ProtectedRoute = () => {
    const { user } = useAuth();

    if (user) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
};
