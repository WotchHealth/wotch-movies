import styles from "./BreadCrumb.module.scss";

type Props = {
  movieTitle: string;
};

const BreadCrumb = ({ movieTitle }: Props) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <span>{movieTitle}</span>
    </div>
  </div>
);

export default BreadCrumb;
