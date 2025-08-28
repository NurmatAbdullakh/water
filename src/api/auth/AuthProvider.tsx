import { createContext, useContext, useState, useEffect } from "react";
import api from "./api";
import { getAccessToken, setAccessToken, logout } from "./authService";

type User = {
    id: string;
    email: string;
    role: "ADMIN" | "USER";
};

type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setTokenState] = useState<string | null>(getAccessToken());

    // при монтировании попробуем подтянуть пользователя
    useEffect(() => {
        if (token) {
            api.get("/auth/me")
                .then((res) => setUser(res.data)) // сервер возвращает {id, email, role}
                .catch(() => {
                    logout();
                    setUser(null);
                    setTokenState(null);
                });
        }
    }, [token]);

    const login = async (email: string, password: string) => {
        const res = await api.post("/auth/login", { email, password });

        const { accessToken, user } = res.data;
        setAccessToken(accessToken);
        setTokenState(accessToken);
        setUser(user);

        // если хочешь сохранять пользователя в localStorage:
        localStorage.setItem("user", JSON.stringify(user));
    };

    const handleLogout = () => {
        logout();
        setUser(null);
        setTokenState(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};
