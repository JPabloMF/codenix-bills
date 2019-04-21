import React, { useState } from "react";

/* constants */
import navData from "../../constants/navbar.json";

/* Components */
import ContentWrapper from "../shared/contentwrapper";
import Navbar from "../shared/navbar";
import Header from "../shared/header";

/* utils */
import { isMobile } from "../../utils/devices";

const Dashboard = () => {
  const [openMenu, setOpenMenu] = useState(isMobile.any() ? false : true);
  return (
    <div>
      <Navbar itemsMenu={navData} open={openMenu} />
      <Header setOpenMenu={setOpenMenu} open={openMenu} />
      <ContentWrapper open={openMenu} />
    </div>
  );
};

export default Dashboard;
