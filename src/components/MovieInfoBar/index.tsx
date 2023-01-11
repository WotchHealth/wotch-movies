import { calcTime, convertMoney } from "../../helpers";
import styles from "./MovieInfoBar.module.scss";

type Props = {
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfoBar = ({ time, budget, revenue }: Props) => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className="column">
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </div>
  </div>
);

export default MovieInfoBar;
