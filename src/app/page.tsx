import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "./common-pages/home";
export default function Home() {
  return (
    <div className={styles.main}>
      <Homepage />
    </div>
  );
}
