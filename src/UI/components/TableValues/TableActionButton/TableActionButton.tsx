import { Button, Tooltip } from "antd"
import type { ReactNode } from "react"
import styles from "./TableActionButton.module.css"

export const TableActionButton = ({ icon, title }: { icon: ReactNode, title: string }) => {
    return (
        <Tooltip title={title} >
            <Button className={styles.button} icon={icon} />
        </Tooltip>
    )
}