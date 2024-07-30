import styles from "./page.module.css";
import data from "./data";
import Nav from "./components/Nav";
import Card from "./components/Card";

export default function Home() {
  let activitiesData = data.map(activity => {
    return (
      <Card
        activity={activity}
      />
    )
  })
  return (
    <main className={styles.main}>
      <div className={styles.head}>

        <Nav />
        <div className={styles.cards}>
          {activitiesData}
        </div>
      </div>
    </main>
  );
}
