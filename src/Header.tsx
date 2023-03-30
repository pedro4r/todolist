import styles from "./Header.module.css";
import rocketLogo from "./assets/rocketLogo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={rocketLogo} alt="rocket logo"></img>
        <span className={styles.logoTitle01}>to</span>
        <span className={styles.logoTitle02}>do</span>
      </div>
    </div>
  );
}
