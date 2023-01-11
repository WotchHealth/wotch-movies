import styles from "./Button.module.scss";

type Props = {
  text: string;
  callback: () => void;
};

const Button = ({ text, callback }: Props) => (
  <button className={styles.wrapper} type="button" onClick={callback}>
    {text}
  </button>
);

export default Button;
