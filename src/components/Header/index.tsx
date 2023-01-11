import WotchMoviesLogo from "../../images/wotch-movies-logo.svg";

import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <img
        className={styles.logoImg}
        src={WotchMoviesLogo}
        alt="wotch-movies-logo"
      />
    </div>
  </div>
);

export default Header;
