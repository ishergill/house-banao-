import React from "react";

// !assets
import { anglearrow } from "../assets/Dashboard";
import GaugeChart from "react-gauge-chart";

function OverallProgress() {
  return (
    <div className="OverallProgress">
      <div className="OverallProgress__top">
        <h2>Overall Progress</h2>
        <button>
          <p>All</p>
          <img src={anglearrow} alt="arrowangle" />
        </button>
      </div>
      <div className="OverallProgress__main">
        <GaugeChart
          id="gauge-chart1"
          percent={0.72}
          arcPadding={0}
          colors={["#1D9432", "#E8B73A", "#E65E2B"]}
          textColor="#060606"
          needleColor="#9A9A9A"
          animateDuration="6000"
          cornerRadius={3}
          style={{
            scale: `1.12`,
          }}
        />
        <div className="OverallProgress__level">
          <span className="OverallProgress__level__95">95</span>
          <span className="OverallProgress__level__26">26</span>
          <span className="OverallProgress__level__35">35</span>
          <span className="OverallProgress__level__39">35</span>
        </div>
      </div>
    </div>
  );
}

export default OverallProgress;
