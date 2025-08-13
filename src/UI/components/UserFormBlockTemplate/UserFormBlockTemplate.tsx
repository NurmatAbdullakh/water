import type { FC } from "react"
import type React from "react"
import styles from "./UserFormBlockTemplate.module.css"
import { Button } from "../CustomAntdComponents/Button"

interface props {
    title: string
    subtitle: string
    form: React.ReactNode
    submitButtonText: string
}

export const UserFormBlockTemplate: FC<props> = ({ title, subtitle, form, submitButtonText }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.formBlock}>
                <div className={styles.formBody}>{form}</div>
                <div className={styles.footer}>
                    <Button size="middle">Cancel</Button>
                    <Button type="primary" size="middle">{submitButtonText}</Button>
                </div>
            </div>
        </div>

    )
}

