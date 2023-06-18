import React, { useState } from "react";
import Side from "../Side";
import Menu from "../Menu";
import Main from "../Main";
import Pockets from "../Pockets/Pockets";
import Inventory from "../Inventory/Inventory";
import Contact from "../Contacts/Contact";
import Report from "../Report/Report";

const Dashboard = () => {
  const [active, setActive] = useState("dash");

  return (
    <div className="h-full w-full grid grid-cols-[250px_minmax(500px,_1fr)_350px] ">
      <Menu active={active} setActive={setActive} />
      {active === "dash" ? (
        <Main />
      ) : active === "money" ? (
        <Pockets />
      ) : active === "store" ? (
        <Inventory />
      ) : active === "contact" ? (
        <Contact />
      ) : active === "report" ? (
        <Report />
      ) : null}
      <Side />
    </div>
  );
};

export default Dashboard;
