import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Color } from "../../../../assets/colors";

export interface MenuItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
}

const useStyle = createUseStyles(() => ({
    menu: {
        "&:not(:last-child)": {
            marginBottom: "8px",
            paddingBottom: "8px",
            borderBottom: `1px solid ${Color.border.secondary}`
        }
    },
    menuLink: {
        display: "block",
        padding: "11px",
        borderRadius: "8px",
        marginBottom: "2px",
        transition: "background-color 0.3s ease",
        color: Color.text.secondary["700"],
        "&:hover": {
            color: Color.text.secaondaryHover,
        }
    },
    menuLinkActive: {
        background: "#F5F5F5"
    },
    menuItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    menuItemIcon: {
        marginRight: "10px",
    },
    menuItemLabel: {
        fontSize: "14px",
        fontWeight: "bold",
    }
}));

export const Menu = ({ items }: { items: MenuItem[] }) => {
    const classes = useStyle();

    return (
        <ul className={classes.menu}>
            {items.map((item) => (
                <NavLink to={item.key} key={item.key}
                    className={({ isActive }) => classNames(classes.menuLink, {
                        [classes.menuLinkActive]: isActive,
                    })}
                >
                    <li key={item.key} className={classes.menuItem}>
                        <div className={classes.menuItemIcon}>
                            {item.icon}
                        </div>
                        <div className={classes.menuItemLabel}>
                            {item.label}
                        </div>
                    </li>
                </NavLink>
            ))}
        </ul>
    )
}