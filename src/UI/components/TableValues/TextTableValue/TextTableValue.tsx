import styles from "./TextTableValue.module.css"

export const TextTableValue = ({ text }: { text: string }) => {
    return <div className={styles.text}>{text}</div>
}