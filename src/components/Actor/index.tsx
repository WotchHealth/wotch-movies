import styles from "./Actor.module.scss";

type Props = {
  name: string;
  character: string;
  imageUrl: string;
};

const Actor = ({ name, character, imageUrl }: Props) => (
  <div className={styles.wrapper}>
    <img className={styles.image} src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </div>
);

export default Actor;
