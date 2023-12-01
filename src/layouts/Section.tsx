import React from "react";
import { SectionProps, createSectionStyles } from "./utils";
import { mergeClasses } from "@fluentui/react-components";

const Section: React.FC<SectionProps> = (props) => {
  const styles = createSectionStyles();

  return (
    <div className={styles.root}>
      <div
        className={mergeClasses(styles.sidebar, props.style)}
        style={{ width: props.sideWidth }}
      >
        {props.sidebar}
      </div>
      <div className={styles.content}>{props.content}</div>
    </div>
  );
};

export default Section;
