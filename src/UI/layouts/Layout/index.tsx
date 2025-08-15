import { Layout as AntLayout } from "antd";
import { createUseStyles } from "react-jss";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./SideBar";
import { Header } from "./Header";

const { Content } = AntLayout;

const useStyles = createUseStyles({
    layout: {
        padding: 0,
        background: "#fff",
        position: "sticky",
        height: "100vh",
        overflow: "hidden"
    },
    content: {
        background: "#fff",
        height: "100vh",
        overflowY: "auto",
    },
    contentWrapper: {
        padding: "32px",
        animation: "$fadeIn 0.3s ease-in-out"
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0.8,
            transform: "translateY(20px)",
        },
        "50%": {
            opacity: 0.8,
            transform: "translateY(10px)",
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)",
        }
    }
});

export const Layout = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <AntLayout className={classes.layout}>
            <Sidebar />
            <Content className={classes.content}>
                <Header />
                <div className={classes.contentWrapper} key={location.pathname}>
                    <Outlet />
                </div>
            </Content>
        </AntLayout>
    );
};