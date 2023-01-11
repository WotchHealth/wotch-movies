// Styles
import styles from "./HeroImage.module.scss";

// Types
type Props = {
  image: string;
  title: string;
  text: string;
};

const HeroImage = ({ image, title, text }: Props) => (
  <div
    className={styles.wrapper}
    style={{
      background: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${image}), var(--darkGrey) center`,
      backgroundSize: "100%, cover",
      height: "600px",
      position: "relative",
      animation: "animateHeroImage 1s",
    }}
  >
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default HeroImage;
