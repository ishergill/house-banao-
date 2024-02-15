import React from "react";

// !assets
import { anglearrow } from "../assets/Dashboard";

//! apis
import overviewData from "../Constatnts/overviewData";

//! components
import OverviewCard from "./OverviewCard";

function Overview() {
  return (
    <div className="Overview">
      <div className="Overview__top">
        <h2>Overview</h2>
        <button>
          <p>Last 30 days</p>
          <img src={anglearrow} />
        </button>
      </div>
      <div className="Overview__content">
        {overviewData?.map((item) => (
          <OverviewCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
