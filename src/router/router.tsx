import { createBrowserRouter, Outlet } from "react-router-dom";
import { Paths } from "./paths";
import { Layout } from "../UI/pages/Layout";
import DashboardOverview from "../UI/components/DashboardOverview";
import { Space } from "antd";
import PurchasesChart from "../UI/components/PurchasesChart";
import SiteTrafficChart from "../UI/components/SiteTrafficChart";

// Import your page components here
// For now, I'll create placeholder components
const Home = () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <DashboardOverview />
        <PurchasesChart />
        <SiteTrafficChart />
    </Space>
);
const Dashboard = () => <div>Dashboard Page</div>;
const Profile = () => <div>Profile Page</div>;
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
                element: <Home />,
            },
            {
                path: Paths.DASHBOARD,
                element: <Dashboard />,
            },
            {
                path: Paths.PROFILE,
                element: <Profile />,
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