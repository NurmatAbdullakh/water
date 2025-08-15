import { Layout as AntLayout, Button, Drawer, Flex, Image } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { MenuIcon } from "../../../../assets/icons";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { Paths } from "../../../../router/paths";
import { Menu } from "./Menu";
import { menuItems } from "./menuItems";
import { Color } from "../../../../assets/colors";

const useStyle = createUseStyles(() => ({
    header: {
        padding: "16px",
        borderBottom: `1px solid ${Color.border.secondary}`,
    },
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

    const { Sider } = AntLayout;


    return isMobile ? (
        <>
            <Flex justify="space-between" align="center" className={classes.header}>
                <Image preview={false} src="/Logo.svg" alt="logo" width={160} height={32} />
                <Link to={Paths.HOME}>
                    <Button
                        type="text"
                        icon={<MenuIcon />}
                        onClick={() => setDrawerOpen(true)}
                    />
                </Link>
            </Flex>
            <Drawer
                placement="right"
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