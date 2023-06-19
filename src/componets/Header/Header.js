import { LogoIcon } from "../../img";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header class={styles.header}>
      <nav class={styles.header_container}>
        <div class={styles.logo}>
          <LogoIcon />
        </div>
      </nav>
    </header>
  );
};
export { Header };
