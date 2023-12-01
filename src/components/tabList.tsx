import * as React from "react";
import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
} from "@fluentui/react-components";
import {
  SubGridRegular,
  SubGridFilled,
  bundleIcon,
  ReceiptMoneyRegular,
  ReceiptMoneyFilled,
  ContactCardRegular,
  ContactCardFilled,
  BuildingRegular,
  BuildingFilled,
  TicketDiagonalRegular,
  TicketDiagonalFilled,
} from "@fluentui/react-icons";

const SubGrid = bundleIcon(SubGridFilled, SubGridRegular);
const ReceiptMoney = bundleIcon(ReceiptMoneyFilled, ReceiptMoneyRegular);
const ContactCard = bundleIcon(ContactCardFilled, ContactCardRegular);
const Building = bundleIcon(BuildingFilled, BuildingRegular);
const TicketDiagonal = bundleIcon(TicketDiagonalFilled, TicketDiagonalRegular);

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("0px", "4px"),
    rowGap: "20px",
  },
});

interface IconOnlyProps {
  isOpen: boolean;
}

export const IconOnly: React.FC<IconOnlyProps> = (props) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TabList defaultSelectedValue="tab2" vertical>
        <Tab
          icon={<SubGrid />}
          value="tab1"
          aria-label="Leads Tab"
          style={{ height: "40px" }}
        >
          {props.isOpen ? "Leads" : ""}
        </Tab>
        <Tab
          icon={<ReceiptMoney />}
          value="tab2"
          aria-label="Opportunity Tab"
          style={{ height: "40px" }}
        >
          {props.isOpen ? "Opportunity" : ""}
        </Tab>
        <Tab
          icon={<ContactCard />}
          value="tab3"
          aria-label="Contact Tab"
          style={{ height: "40px" }}
        >
          {props.isOpen ? "Contact" : ""}
        </Tab>
        <Tab
          icon={<Building />}
          value="tab4"
          aria-label="Organization Tab"
          style={{ height: "40px" }}
        >
          {props.isOpen ? "Organization" : ""}
        </Tab>
        <Tab
          icon={<TicketDiagonal />}
          value="tab5"
          aria-label="Case Tab"
          style={{ height: "40px" }}
        >
          {props.isOpen ? "Case" : ""}
        </Tab>
      </TabList>
    </div>
  );
};
