import styles from "../page.module.css"
export default function Card(props: any) {
    let cardBadge
    if (props.activity.openSpots === 0) {
        cardBadge = <span className={styles.badge}>SOLD OUT</span>

    } else if (props.activity.online) {
        cardBadge = <span className={styles.badge}>Online</span>
    }



    return (
        <div className={styles.card}>
            {/* {props.online && <span className={styles.badge}>Online</span>} */}
            {cardBadge}
            <img className={styles.img_card} src={props.activity.img} alt="" />
            <div>
                <img src="" alt="" />
                <span>{props.activity.rating}</span>
                <span>({props.activity.reviewer})</span>
                <span>・{props.activity.location}</span>
            </div>
            <div>{props.activity.title}</div>
            <div>From ${props.activity.price} / person</div>
        </div>

    )
}