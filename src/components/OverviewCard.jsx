import React from "react";

// !assets
import { trend } from "../assets/Dashboard";

function OverviewCard({ item }) {
  return (
    <div className="OverviewCard" key={item?.id}>
      <div className="OverviewCard__icon">
        <img src={item?.icon} alt={item?.title} />
      </div>
      <div className="OverviewCard">
        <h6>{item?.title}</h6>
      </div>
      <div className="OverviewCard">
        <p>{item?.value}</p>
      </div>
      <div className="OverviewCard">
        <img src={trend} alt={item?.title} />
        <p>{item?.info}</p>
      </div>
    </div>
  );
}

export default OverviewCard;
