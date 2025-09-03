import { Spin } from "antd";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../UI/layouts/Layout";
import { Paths } from "./paths";

// Create a reusable loading component
const LoadingSpinner = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
        <Spin size="large" tip="Loading...">
            <div style={{ width: 0, height: 0 }} /> {/* чтобы tip отобразился */}
        </Spin>
    </div>
);


// Lazy load auth-related pages
// const Login = lazy(() => import("../UI/pages/Login"));


// Dashboard and other components
const Dashboard = () => <> it is empty</>;
const Map = () => <>it is empty</>
const Calculator = () => <>it is empty</>
const Data = () => <>it is empty</>
const About = () => <>it is empty</>
const NotFound = () => <>it is empty</>

export const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                path: Paths.HOME,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Dashboard />
                    </Suspense>
                ),
            },
            {
                path: Paths.MAP,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Map />
                    </Suspense>
                ),
            },
            {
                path: Paths.CALCULATOR,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Calculator />
                    </Suspense>
                ),
            },
            {
                path: Paths.DATA,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Data />
                    </Suspense>
                ),
            },
            {
                path: Paths.ABOUT,
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <About />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: Paths.NOT_FOUND,
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <NotFound />
            </Suspense>
        ),
    },
]);