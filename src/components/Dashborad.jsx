import React from "react";

// !components
import Navbar from "./Navbar";
import Overview from "./Overview";
import Table from "./Table";
import OverallProgress from "./OverallProgress";

function Dashborad() {
  return (
    <div className="dashboard">
      <Navbar />
      <Overview />
      <div className="dashboard__main">
        <Table />
        <OverallProgress />
      </div>
    </div>
  );
}

export default Dashborad;
