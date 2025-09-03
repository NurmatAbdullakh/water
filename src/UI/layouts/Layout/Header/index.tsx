import { Layout, Typography } from "antd";
import { createUseStyles } from "react-jss";
import { Color } from "../../../../assets/colors";
import { useIsMobile } from "../../../../hooks/useIsMobile";
const { Header: AntdHeader } = Layout;


interface StyleProps {
    borderColor: string;
}


const useStyles = createUseStyles({
    header: {
        position: "sticky",
        top: "0",
        zIndex: 1,
        background: "#fff",
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
        cursor: "pointer",
        width: "40px",
        height: "40px"
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
                <Typography.Text >ENVIRONMENTAL FLOW CALCULATOR CENTRAL ASIA</Typography.Text>
            </AntdHeader>
        )

    )
}