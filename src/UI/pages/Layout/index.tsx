import { Layout as AntLayout } from "antd";
import { type ReactNode } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { Sidebar } from "./SideBar";

const { Header, Content } = AntLayout;

export const Layout = ({ children }: { children: ReactNode }) => {
    const isMobile = useIsMobile();

    return (
        <AntLayout style={{ height: "100vh", overflow: "hidden" }}>
            <AntLayout style={{ padding: 0, background: "#fff" }}>
                <Sidebar />
                {!isMobile && (
                    <Header style={{ padding: 0, background: "#fff", border: "1px solid black" }} />
                )}
                <Content style={{ margin: "24px 16px", padding: 24, background: "#fff", height: "100vh", overflowY: "auto" }}>
                    {children}
                </Content>
            </AntLayout>
        </AntLayout >
    );
};