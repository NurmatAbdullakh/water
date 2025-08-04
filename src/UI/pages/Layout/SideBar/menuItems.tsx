import { BarChartSquareIcon, BarLineChartDottedIcon, BellIcon, BriefCaseIcon, CheckVerifiedIcon, HelpCircleIcon, LineChartUpIcon, LineChartUpSquareIcon, PieChartIcon, SertificateIcon, UsersIcon, UsersUpIcon, YoutubeIcon } from "../../../../assets/icons";
import { Paths } from "../../../../router/paths";

const mainMenuItems = [
    {
        key: Paths.DASHBOARD,
        label: "Dashboard",
        icon: <BarChartSquareIcon />

    },
    {
        key: Paths.USERS,
        label: "Users",
        icon: <UsersIcon />

    },
    {
        key: Paths.ADMIN_ROLES,
        label: "Admin Roles",
        icon: <UsersUpIcon />
    },
    {
        key: Paths.SUBSCRIPTIONS,
        label: "Subscriptions",
        icon: <CheckVerifiedIcon />
    },
    {
        key: Paths.WEBSITE_ANALYTICS,
        label: "Website Analytics",
        icon: <LineChartUpIcon />
    },
];

const stockMenuItems = [
    {
        key: Paths.STOCK_ANALYSES,
        label: "Stock Analyses",
        icon: <PieChartIcon />
    },
    {
        key: Paths.STOCK_REPORT,
        label: "Stock Report",
        icon: <LineChartUpSquareIcon />
    },
    {
        key: Paths.TOP_HALAL_STOCKS,
        label: "Top Halal Stocks",
        icon: <BarChartSquareIcon />
    },
    {
        key: Paths.PORTFOLIOS,
        label: "Portfolios (pre-made)",
        icon: <BriefCaseIcon />
    },
];
const financeMenuItems = [
    {
        key: Paths.FINANCE,
        label: "Finance",
        icon: <BarLineChartDottedIcon />
    }
];

const mediaMenuItems = [
    {
        key: Paths.ARTICLES,
        label: "Articles",
        icon: <SertificateIcon />
    },
    {
        key: Paths.WEBINARS,
        label: "Webinars",
        icon: <YoutubeIcon />
    }
];

const extraMenuItems = [
    {
        key: Paths.SUPPORT_TICKETS,
        label: "Support Tickets",
        icon: <HelpCircleIcon />
    },
    {
        key: Paths.NOTIFICATIONS,
        label: "Notifications",
        icon: <BellIcon />
    },
]


export const menuItems = [
    mainMenuItems,
    stockMenuItems,
    financeMenuItems,
    mediaMenuItems,
    extraMenuItems
]