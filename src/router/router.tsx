import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Layout } from "../UI/layouts/Layout";
import DashboardOverview from "../UI/components/DashboardOverview";
import { Space, Spin } from "antd";
import PurchasesChart from "../UI/components/PurchasesChart";
import SiteTrafficChart from "../UI/components/SiteTrafficChart";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthLayout } from "../UI/layouts/AuthLayout";
import { CenteredLayout } from "../UI/layouts/CenteredLayout";
import { lazy, Suspense } from "react";

// Create a reusable loading component
const LoadingSpinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: "300px", }}>
        <Spin size="large" tip="Loading..." />
    </div>
);

// Lazy load auth-related pages
const Login = lazy(() => import("../UI/pages/Login"));
const Users = lazy(() => import("../UI/pages/Users"));
const UsersCreate = lazy(() => import("../UI/pages/UsersCreate"));
const SignUp = lazy(() => import("../UI/pages/SignUp"));
const ForgotPassword = lazy(() => import("../UI/pages/ForgotPassword"));
const CheckYourEmail = lazy(() => import("../UI/pages/CheckYourEmail"));
const SetNewPassword = lazy(() => import("../UI/pages/SetNewPassword"));
const PasswordReset = lazy(() => import("../UI/pages/PasswordReset"));

// Dashboard and other components
const Dashboard = () => (
    <div>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <DashboardOverview />
            <PurchasesChart />
            <SiteTrafficChart />
        </Space>
    </div>
);

// Lazy load main content pages
const Profile = () => <>it is empty</>
const AdminRoles = () => <>it is empty</>
const Subscriptions = () => <>it is empty</>
const WebsiteAnalytics = () => <>it is empty</>
const StockAnalyses = () => <>it is empty</>
const StockReport = () => <>it is empty</>
const TopHalalStocks = () => <>it is empty</>
const Portfolios = () => <>it is empty</>
const Finance = () => <>it is empty</>
const Articles = () => <>it is empty</>
const Webinars = () => <>it is empty</>
const SupportTickets = () => <>it is empty</>
const Notifications = () => <>it is empty</>
const Settings = () => <>it is empty</>
const NotFound = () => <>it is empty</>

export const router = createBrowserRouter([
    {
        element: <PublicRoute />,
        children: [
            {
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AuthLayout />
                    </Suspense>
                ),
                children: [
                    {
                        path: Paths.LOGIN,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Login />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.SIGN_UP,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <SignUp />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <CenteredLayout />
                    </Suspense>
                ),
                children: [
                    {
                        path: Paths.FORGOT_PASSWORD,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <ForgotPassword />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.CHECK_YOUREMAIL,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <CheckYourEmail />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.SET_NEW_PASSWORD,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <SetNewPassword />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.PASSWORD_RESET,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <PasswordReset />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: Paths.HOME,
                        element: <Dashboard />,
                    },
                    {
                        path: Paths.USERS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Users />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.USERS_CREATE,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <UsersCreate />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.PROFILE,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Profile />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.ADMIN_ROLES,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <AdminRoles />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.SUBSCRIPTIONS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Subscriptions />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.WEBSITE_ANALYTICS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <WebsiteAnalytics />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.STOCK_ANALYSES,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <StockAnalyses />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.STOCK_REPORT,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <StockReport />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.TOP_HALAL_STOCKS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <TopHalalStocks />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.PORTFOLIOS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Portfolios />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.FINANCE,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Finance />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.ARTICLES,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Articles />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.WEBINARS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Webinars />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.SUPPORT_TICKETS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <SupportTickets />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.NOTIFICATIONS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Notifications />
                            </Suspense>
                        ),
                    },
                    {
                        path: Paths.SETTINGS,
                        element: (
                            <Suspense fallback={<LoadingSpinner />}>
                                <Settings />
                            </Suspense>
                        ),
                    },
                ],
            }],
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