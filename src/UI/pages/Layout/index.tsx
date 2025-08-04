import { useState, useEffect, type ReactNode } from "react";
import { Layout as AntLayout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { Paths } from "../../../router/paths";

const { Header, Sider, Content } = AntLayout;

const menuItems = [
    {
        key: Paths.HOME,
        label: <Link to={Paths.HOME}>Home</Link>,
    },
    {
        key: Paths.DASHBOARD,
        label: <Link to={Paths.DASHBOARD}>Dashboard</Link>,
    },
    {
        key: Paths.PROFILE,
        label: <Link to={Paths.PROFILE}>Profile</Link>,
    },
    {
        key: Paths.SETTINGS,
        label: <Link to={Paths.SETTINGS}>Settings</Link>,
    },
];

export const Layout = ({ children }: { children: ReactNode }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const selectedKey = Object.values(Paths).find(path =>
        path !== Paths.NOT_FOUND && location.pathname === path
    ) || Paths.HOME;

    const sidebarContent = (
        <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuItems}
        />
    );

    return (
        <AntLayout style={{ minHeight: "100vh" }}>
            {isMobile ? (
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
                        {sidebarContent}
                    </Drawer>
                </>
            ) : (
                <Sider width={300} theme="light" style={{ border: "1px solid black" }}>
                    <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <h2>Akinda Admin</h2>
                    </div>
                    {sidebarContent}
                </Sider>
            )}
            <AntLayout style={{ padding: 0, background: "#fff" }}>
                {!isMobile && (
                    <Header style={{ padding: 0, background: "#fff", border: "1px solid black" }} />
                )}
                <Content style={{ margin: "24px 16px", padding: 24, background: "#fff" }}>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
};