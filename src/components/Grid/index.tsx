import React from "react";
import styles from "./Grid.module.scss";

// Types
type Props = {
  header: string;
  children: React.ReactNode;
};

const Grid = ({ header, children }: Props) => (
  <div className={styles.wrapper}>
    <h1>{header}</h1>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Grid;
