import React, { useEffect, useState } from "react";

// !assets
import { down_trend, up_trend } from "../assets/Dashboard";

function OverviewCard({ item }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="OverviewCard" key={item?.id}>
      <div
        className="OverviewCard__icon"
        style={{
          background: item?.iconBg,
        }}
      >
        <img src={item?.icon} alt={item?.title} />
      </div>
      <div className="OverviewCard__title">
        <h6>{item?.title}</h6>
      </div>

      <div className="OverviewCard__value">
        {loading ? (
          <span>Loading..</span>
        ) : (
          <>
            <p>{item?.value?.split("/")[0]}</p>
            <span>/{item?.value?.split("/")[1]}</span>
          </>
        )}
      </div>
      <div className="OverviewCard__info">
        <img src={item?.id === 2 ? down_trend : up_trend} alt={item?.title} />
        <p>{item?.info}</p>
      </div>
    </div>
  );
}

export default OverviewCard;
