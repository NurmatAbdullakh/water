import { Layout as AntLayout } from "antd";
import { createUseStyles } from "react-jss";
import { Outlet } from "react-router-dom";
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
        overflowY: "auto"
    },
    contentWrapper: {
        padding: "0 32px"
    },
});

export const Layout = () => {
    const classes = useStyles();

    return (
        <AntLayout className={classes.layout}>
            <Sidebar />
            <Content className={classes.content}>
                <Header />
                <div className={classes.contentWrapper}>
                    <Outlet />
                </div>
            </Content>
        </AntLayout>
    );
};