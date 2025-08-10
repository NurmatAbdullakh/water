import { MenuOutlined } from "@ant-design/icons";
import { Layout as AntLayout, Button, Drawer } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { Paths } from "../../../../router/paths";
import { Menu } from "./Menu";
import { menuItems } from "./menuItems";

const useStyle = createUseStyles(() => ({
    contentBlock: {
        border: "1px solid #e8e8e8",
        borderRadius: "20px",
        height: "calc(100% - 8px)",
        width: "100%",
        maxHeight: "932px",
        padding: "20px",
        overflow: "auto"
    },
    logo: {
        marginBottom: "20px",
    }
}));

export const Sidebar = () => {
    const classes = useStyle();
    const isMobile = useIsMobile();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const { Header, Sider } = AntLayout;


    return isMobile ? (
        <>
            <Header style={{ padding: "0 16px", display: "flex", alignItems: "center" }}>
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={() => setDrawerOpen(true)}
                />
                <div style={{ marginLeft: "16px", color: "white" }}>Akinda Admin</div>
            </Header>
            <Drawer
                placement="left"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                width={300}
            >
                {menuItems.map((item) => (
                    <Menu items={item} />
                ))}
            </Drawer>
        </>
    ) : (
        <Sider width={300} theme="light" style={{ position: "relative", top: "4px", left: "4px", zIndex: 2 }}>
            <div className={classes.contentBlock}>
                <div className={classes.logo}>
                    <Link to={Paths.HOME}>
                        <img src="../../../../public/Logo.svg" alt="logo" />
                    </Link>
                </div>
                {menuItems.map((item) => (
                    <Menu items={item} />
                ))}
            </div>
        </Sider>
    )
}