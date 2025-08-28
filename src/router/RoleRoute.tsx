import { Navigate } from "react-router-dom";
import { useAuth } from "../api/auth/AuthProvider"; // твой контекст

type RoleRouteProps = {
    children: React.ReactNode;
    roles: string[]; // ["ADMIN"] или ["USER", "MANAGER"]
};

export const RoleRoute = ({ children, roles }: RoleRouteProps) => {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" replace />;

    // если у юзера нет подходящей роли → редирект на 403 или главную
    if (!roles.includes(user.role)) {
        return <Navigate to="/403" replace />;
    }

    return <>{children}</>;
};
