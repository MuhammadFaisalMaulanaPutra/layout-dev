import { makeStyles, tokens, shorthands } from "@fluentui/react-components";

export const createContentSyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100vw",
    height: "100vh",
    color: tokens.colorBrandBackgroundInverted,
  },
  header: {
    display: "flex",
    boxSizing: "border-box",
    alignItems: "center",
    position: "sticky",
    height: "48px",
    backgroundColor: tokens.colorBrandBackground,
    top: 0,
    right: 0,
    zIndex: 2,
  },
  main: {
    height: "calc(100vh - 48px)",
    width: "100%",
    ...shorthands.overflow("auto"),
  },
});

export const createMainStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  menu: {
    height: "auto",
    zIndex: 1,
  },
  section: {
    ...shorthands.flex(1),
    ...shorthands.overflow("auto"),
  },
});

export const createNavigationStyles = makeStyles({
  root: {
    display: "flex",
    position: "fixed",
    width: "100%",
    height: "inherit",
  },
  nav: {
    height: "inherit",
    position: "fixed",
    backgroundColor: tokens.colorNeutralBackground5,
    width: "48px",
    ...shorthands.overflow("auto"),
    "::-webkit-scrollbar": { display: "none" },
    color: tokens.colorNeutralBackgroundInverted,
    zIndex: 1,
  },
  headerNav: {
    position: "sticky",
    top: 0,
    width: "48px",
    backgroundColor: tokens.colorNeutralBackground5,
    zIndex: 2,
  },
  headerItem: {
    display: "flex",
    height: "48px",
    width: "48px",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyNav: {
    display: "flex",
    zIndex: 1,
  },
  footer: {
    position: "sticky",
    bottom: 0,
    backgroundColor: tokens.colorNeutralBackground5,
    width: "48px",
    zIndex: 2,
  },
  footerItem: {
    display: "flex",
    height: "48px",
    width: "48px",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    top: 0,
    marginLeft: "48px",
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralBackgroundInverted,
    ...shorthands.overflow("auto"),
  },
});

export const createSectionStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
    ...shorthands.overflow("auto"),
  },
  sidebar: {
    ...shorthands.overflow("auto"),
    width: "600px",
  },
  content: {
    ...shorthands.overflow("auto"),
    width: "100%",
  },
});
