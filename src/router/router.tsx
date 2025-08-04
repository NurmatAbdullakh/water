import { createBrowserRouter, Outlet } from "react-router-dom";
import { Paths } from "./paths";
import { Layout } from "../UI/pages/Layout";
import DashboardOverview from "../UI/components/DashboardOverview";
import { Space } from "antd";
import PurchasesChart from "../UI/components/PurchasesChart";
import SiteTrafficChart from "../UI/components/SiteTrafficChart";

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

const AppLayout = () => (
    <Layout>
        <Outlet />
    </Layout>
);

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
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
    },
    {
        path: Paths.NOT_FOUND,
        element: <NotFound />,
    },
]);