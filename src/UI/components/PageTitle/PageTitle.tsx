import type React from "react"
import styles from "./PageTitle.module.css"

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
    return <h1 className={styles.pageTitle}>{children}</h1>
}