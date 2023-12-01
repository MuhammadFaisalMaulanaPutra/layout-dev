import { ReactNode } from "react";

export interface NavigationProps {
  headerNav?: ReactNode;
  bodyNav?: ReactNode;
  footerNav?: ReactNode;
  content?: ReactNode;
  navWidth?: string;
  style?: string;
}

export interface ContentProps {
  header?: ReactNode;
  main?: ReactNode;
}

export interface MainProps {
  menu?: ReactNode;
  section?: ReactNode;
}

export interface SectionProps {
  sidebar?: ReactNode;
  content?: ReactNode;
  sideWidth?: string;
  style?: string;
}
