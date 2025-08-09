import { Outlet } from "react-router-dom";
import styles from "./index.module.css"

export const CenteredLayout = () => {
    return (
        <div className={styles.centeredLayout}>
            <div className={styles.authLayoutBg}>
                <img src="/Background_pattern_decorative.png" />
            </div>
            <div className={styles.centeredContainer}>
                <Outlet />
            </div>
        </div>
    )
}