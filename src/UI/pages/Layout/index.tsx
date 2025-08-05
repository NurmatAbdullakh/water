import { Layout as AntLayout } from "antd";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { Sidebar } from "./SideBar";
import { Outlet } from "react-router-dom";
import { Color } from "../../../assets/colors";
import { createUseStyles } from "react-jss";

const { Header, Content } = AntLayout;
interface StyleProps {
    borderColor: string;
}

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
    header: {
        position: "sticky",
        top: "0",
        zIndex: 1,
        padding: 0,
        background: "#fff",
        borderBottom: (props: StyleProps) => `1px solid ${props.borderColor}`,
        marginBottom: "32px"
    },
    contentWrapper: {
        padding: "0 32px"
    }
});

export const Layout = () => {
    const isMobile = useIsMobile();
    const classes = useStyles({ borderColor: Color.border.secondary });

    return (
        <AntLayout className={classes.layout}>
            <Sidebar />
            <Content className={classes.content}>
                {!isMobile && (
                    <Header className={classes.header} />
                )}
                <div className={classes.contentWrapper}>
                    <Outlet />
                </div>
            </Content>
        </AntLayout>
    );
};