import React from "react";
import { MainProps, createMainStyles } from "./utils";

const Main: React.FC<MainProps> = (props) => {
  const styles = createMainStyles();

  return (
    <div className={styles.root}>
      <div className={styles.menu}>{props.menu}</div>
      <div className={styles.section}>{props.section}</div>
    </div>
  );
};

export default Main;
