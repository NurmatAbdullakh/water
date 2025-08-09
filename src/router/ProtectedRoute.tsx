import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

export const ProtectedRoute = () => {
    if (!isAuthenticated()) {
        return <Outlet />
    }
    else {
        return <Navigate to="/login" replace />;
    }
};
