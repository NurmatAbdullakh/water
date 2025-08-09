import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import { Layout } from "../UI/layouts/Layout";
import DashboardOverview from "../UI/components/DashboardOverview";
import { Space } from "antd";
import PurchasesChart from "../UI/components/PurchasesChart";
import SiteTrafficChart from "../UI/components/SiteTrafficChart";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthLayout } from "../UI/layouts/AuthLayout";
import { CenteredLayout } from "../UI/layouts/CenteredLayout";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("../UI/pages/Login"));
const SignUp = lazy(() => import("../UI/pages/SignUp"));
const ForgotPassword = lazy(() => import("../UI/pages/ForgotPassword"));
const CheckYourEmail = lazy(() => import("../UI/pages/CheckYourEmail"));
const SetNewPassword = lazy(() => import("../UI/pages/SetNewPassword"));
const PasswordReset = lazy(() => import("../UI/pages/PasswordReset"));

const Dashboard = () => <div>
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <DashboardOverview />
        <PurchasesChart />
        <SiteTrafficChart />
    </Space></div>;
const Users = () => <div>Users Page</div>;
const Profile = () => <div>Profile Page</div>;
const AdminRoles = () => <div>Admin Roles Page</div>;
const Subscriptions = () => <div>Subscriptions Page</div>;
const WebsiteAnalytics = () => <div>Website Analytics Page</div>;
const StockAnalyses = () => <div>Stock Analyses Page</div>;
const StockReport = () => <div>Stock Report Page</div>;
const TopHalalStocks = () => <div>Top Halal Stocks Page</div>;
const Portfolios = () => <div>Portfolios Page</div>;
const Finance = () => <div>Finance Page</div>;
const Articles = () => <div>Articles Page</div>;
const Webinars = () => <div>Webinars Page</div>;
const SupportTickets = () => <div>Support Tickets Page</div>;
const Notifications = () => <div>Notifications Page</div>;
const Settings = () => <div>Settings Page</div>;
const NotFound = () => <div>404 - Page Not Found</div>;

export const router = createBrowserRouter([
    {
        element: <PublicRoute />,
        children: [
            {
                element:
                    <Suspense fallback={<div>Loading...</div>}>
                        <AuthLayout />
                    </Suspense>,
                children: [
                    {
                        path: Paths.LOGIN,
                        element:
                            <Suspense fallback={<div>Loading...</div>}>
                                <Login />
                            </Suspense>,
                    },
                    {
                        path: Paths.SIGN_UP,
                        element:
                            <Suspense fallback={<div>Loading...</div>}>
                                <SignUp />
                            </Suspense>,
                    },
                ],
            },
            {
                element: 
                    <Suspense fallback={<div>Loading...</div>}>
                        <CenteredLayout />
                    </Suspense>,
                children: [
                    {
                        path: Paths.FORGOT_PASSWORD,
                        element: 
                            <Suspense fallback={<div>Loading...</div>}>
                                <ForgotPassword />
                            </Suspense>,
                    },
                    {
                        path: Paths.CHECK_YOUREMAIL,
                        element: 
                            <Suspense fallback={<div>Loading...</div>}>
                                <CheckYourEmail />
                            </Suspense>,
                    },
                    {
                        path: Paths.SET_NEW_PASSWORD,
                        element: 
                            <Suspense fallback={<div>Loading...</div>}>
                                <SetNewPassword />
                            </Suspense>,
                    },
                    {
                        path: Paths.PASSWORD_RESET,
                        element: 
                            <Suspense fallback={<div>Loading...</div>}>
                                <PasswordReset />
                            </Suspense>,
                    },
                ],
            },
        ],
    },
    {
        element: <ProtectedRoute />, // оборачиваем защищённые маршруты
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
                        element: <Users />,
                    },
                    {
                        path: Paths.PROFILE,
                        element: <Profile />,
                    },
                    {
                        path: Paths.ADMIN_ROLES,
                        element: <AdminRoles />,
                    },
                    {
                        path: Paths.SUBSCRIPTIONS,
                        element: <Subscriptions />,
                    },
                    {
                        path: Paths.WEBSITE_ANALYTICS,
                        element: <WebsiteAnalytics />,
                    },
                    {
                        path: Paths.STOCK_ANALYSES,
                        element: <StockAnalyses />,
                    },
                    {
                        path: Paths.STOCK_REPORT,
                        element: <StockReport />,
                    },
                    {
                        path: Paths.TOP_HALAL_STOCKS,
                        element: <TopHalalStocks />,
                    },
                    {
                        path: Paths.PORTFOLIOS,
                        element: <Portfolios />,
                    },
                    {
                        path: Paths.FINANCE,
                        element: <Finance />,
                    },
                    {
                        path: Paths.ARTICLES,
                        element: <Articles />,
                    },
                    {
                        path: Paths.WEBINARS,
                        element: <Webinars />,
                    },
                    {
                        path: Paths.SUPPORT_TICKETS,
                        element: <SupportTickets />,
                    },
                    {
                        path: Paths.NOTIFICATIONS,
                        element: <Notifications />,
                    },
                    {
                        path: Paths.SETTINGS,
                        element: <Settings />,
                    },
                ],
            }],
    },
    {
        path: Paths.NOT_FOUND,
        element: <NotFound />,
    },
]);