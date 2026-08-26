"use client";
import React, { Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PriceGrid from "./PriceGrid";

const FALLBACK_MONTHLY = [
  {
    name: "Starter",
    description: "For most businesses that want to the otpimize web queries",
    price: "$500",
    period: "/month",
    features:
      "All limited links\nOwn analytics platform\nChat support\nOptimize hashtags\nUnlimited users",
    cycle: "monthly",
  },
  {
    name: "Medium",
    description: "For most businesses that want to the otpimize web queries",
    price: "$700",
    period: "/month",
    features:
      "All limited links\nOwn analytics platform\nChat support\nOptimize hashtags\nUnlimited users",
    cycle: "monthly",
  },
  {
    name: "Advance",
    description: "For most businesses that want to the otpimize web queries",
    price: "$800",
    period: "/month",
    features:
      "All limited links\nOwn analytics platform\nChat support\nOptimize hashtags\nUnlimited users",
    cycle: "monthly",
  },
];

const FALLBACK_YEARLY = FALLBACK_MONTHLY.map((plan) => ({
  ...plan,
  cycle: "yearly",
}));

const PricingTab = ({ plans }) => {
  if (Array.isArray(plans) && plans.length === 0) return null;

  const source =
    Array.isArray(plans) && plans.length
      ? plans
      : [...FALLBACK_MONTHLY, ...FALLBACK_YEARLY];
  const monthly = source.filter(
    (plan) => !plan.cycle || plan.cycle === "monthly",
  );
  const yearly = source.filter((plan) => plan.cycle === "yearly");
  const showTabs = monthly.length > 0 && yearly.length > 0;

  if (!showTabs) {
    return <PriceGrid plans={source} />;
  }

  return (
    <Fragment>
      <Tabs>
        <TabList className="price-tab mb-60">
          <Tab className="nav-item">
            <button className="nav-link active">Monthly</button>
          </Tab>
          <Tab className="nav-item">
            <button className="nav-link active">Yearly</button>
          </Tab>
        </TabList>
        <TabPanel className="tab-pane active show">
          <PriceGrid plans={monthly} />
        </TabPanel>
        <TabPanel className="tab-pane">
          <PriceGrid plans={yearly} />
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};

export default PricingTab;
