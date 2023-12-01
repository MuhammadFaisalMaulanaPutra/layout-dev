import React from "react";
import { NavigationProps, createNavigationStyles } from "./utils";
import { mergeClasses } from "@fluentui/react-components";

const Navigation: React.FC<NavigationProps> = (props) => {
  const styles = createNavigationStyles();
  return (
    <div className={styles.root}>
      <nav
        className={mergeClasses(styles.nav, props.style)}
        style={{
          width: props.navWidth,
        }}
      >
        <header
          className={mergeClasses(styles.headerNav, props.style)}
          style={{
            width: props.navWidth,
          }}
        >
          <div className={styles.headerItem}>{props.headerNav}</div>
        </header>
        <div className={styles.bodyNav}>{props.bodyNav}</div>
        <footer
          className={mergeClasses(styles.footer, props.style)}
          style={{
            width: props.navWidth,
          }}
        >
          <div className={styles.footerItem}>{props.footerNav}</div>
        </footer>
      </nav>
      <div className={styles.content}>{props.content}</div>
    </div>
  );
};

export default Navigation;
