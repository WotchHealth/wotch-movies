import styles from "./Thumb.module.scss";

// Types
type Props = {
  image: string;
  movieId?: number;
};

const Thumb = ({ image }: Props) => (
  <div>
    <img className={styles.image} src={image} alt="movie-thumb" />
  </div>
);

export default Thumb;
