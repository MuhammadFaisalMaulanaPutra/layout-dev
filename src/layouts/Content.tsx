import React from "react";
import { ContentProps, createContentSyles } from "./utils";

const Content: React.FC<ContentProps> = (props) => {
  const styles = createContentSyles();
  return (
    <div className={styles.root}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.main}>{props.main}</div>
    </div>
  );
};

export default Content;
