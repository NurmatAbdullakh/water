import axios from "axios";
import { getAccessToken, setAccessToken, logout } from "./authService";
// authService — утилита для работы с токенами (может хранить в памяти или cookie)

const api = axios.create({
    baseURL: "http://93.127.133.82:8010/api/v1",
    withCredentials: true, // важно, если refreshToken в httpOnly cookie
});

// 🔹 добавляем accessToken в каждый запрос
api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 🔹 обработка ошибок и обновление accessToken
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // если токен истёк (401)
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // ждём, пока другой запрос обновит токен
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = "Bearer " + token;
                        return axios(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // запрос на обновление токена
                const res = await axios.post(
                    "/auth/refresh",
                    {},
                    { withCredentials: true }
                );

                const newToken = res.data.accessToken;
                setAccessToken(newToken);

                api.defaults.headers.common.Authorization = `Bearer ${newToken}`;
                processQueue(null, newToken);

                return api(originalRequest);
            } catch (err) {
                processQueue(err, null);
                logout();
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default api;
