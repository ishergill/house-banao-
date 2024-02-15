import React from "react";

// !assets
import { anglearrow } from "../assets/Dashboard";

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
      <div className="OverallProgress"></div>
    </div>
  );
}

export default OverallProgress;
