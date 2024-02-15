import React from "react";

// !apis
import projectsummartData from "../Constatnts/projectsummartData";

// !assets
import { anglearrow } from "../assets/Dashboard";

function Table() {
  return (
    <div className="Table">
      <div className="Table__top">
        <h2>Project Summary</h2>
        <div className="Table__top__right">
          <button>
            <p>Project</p>
            <img src={anglearrow} alt="arrow-angle" />
          </button>
          <button>
            <p>Project manager</p>
            <img src={anglearrow} alt="arrow-angle" />
          </button>
          <button>
            <p>status</p>
            <img src={anglearrow} alt="arrow-angle" />
          </button>
        </div>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Project Manager</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Progress</th>
        </tr>
        {projectsummartData?.map((item) => (
          <tr key={item?.id}>
            <td>{item?.name}</td>
            <td>{item?.manager}</td>
            <td>{item?.due}</td>
            <td>{item?.status}</td>
            <td>{item?.progress}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
