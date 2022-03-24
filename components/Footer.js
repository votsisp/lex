import styles from '../styles/Footer.module.css'


export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>&copy; 2022 GrDeWB Inc. All rights reserved.</p>
            </div>
            <div className={styles.right}>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Legal</p>
                <p>Greece</p>
            </div>
        </div>
    )
}
