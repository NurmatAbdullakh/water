import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Layout, Popover } from "antd";
import { createUseStyles } from "react-jss";
import { Color } from "../../../../assets/colors";
import { BellIcon, SearchIcon } from "../../../../assets/icons";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { Input } from "../../../components/CustomAntdComponents/Input";
const { Header: AntdHeader } = Layout;

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

interface StyleProps {
    borderColor: string;
}


const useStyles = createUseStyles({
    header: {
        position: "sticky",
        top: "0",
        zIndex: 1,
        background: "#fff",
        marginBottom: "32px",
        borderBottom: (props: StyleProps) => `1px solid ${props.borderColor}`,
        height: "72px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "0 32px"
    },
    headerContent: {
        width: "100%",
        display: "flex",
        gap: "20px",
    },
    headerLeft: {
        display: "flex",
        alignItems: "center",
        flex: 1
    },
    headerRight: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "16px"
    },
    notificationIcon: {
        fontSize: "20px",
        cursor: "pointer"
    },
    avatar: {
        cursor: "pointer"
    },
    searchInput: {
        width: "320px"
    }
});

export const Header = () => {
    const classes = useStyles({ borderColor: Color.border.secondary });

    const isMobile = useIsMobile();

    return (
        !isMobile && (
            <AntdHeader className={classes.header} >
                <div className={classes.headerContent}>
                    <div className={classes.headerLeft}>
                        <Input prefix={<SearchIcon />} placeholder="Search" width={"320px"} className={classes.searchInput} />
                    </div>
                    <div className={classes.headerRight}>
                        <Badge count={5} size="small" style={{ background: "#17B26A" }}>
                            <BellIcon className={classes.notificationIcon} />
                        </Badge>
                        <Popover content={content} title="Title" trigger="click">
                            <Avatar
                                icon={<UserOutlined />}
                                className={classes.avatar}
                            />
                        </Popover>
                    </div>
                </div>
            </AntdHeader>
        )

    )
}