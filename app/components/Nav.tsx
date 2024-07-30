import styles from "../page.module.css"

export default function Nav() {
    return (
        <div className={styles.nav_container}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="airbnb-logo" />
        </div>
    )
}