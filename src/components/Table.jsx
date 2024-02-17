import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// !apis
import projectsummartData from "../Constatnts/projectsummartData";

// !assets
import { anglearrow } from "../assets/Dashboard";

function Table() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
      {
        loading ?

        <p>
          Loading....
        </p>
        :
      <table>
        <tr>
          <th>Name</th>
          <th>Project Manager</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Progress</th>
        </tr>
        <tr className="table-row_border" colspan="5" />
        {projectsummartData?.map((item) => (
          <tr key={item?.id}>
            <td>{item?.name}</td>
            <td>{item?.manager}</td>
            <td>{item?.due}</td>
            <td>
              <p
                style={{
                  color:
                    item?.status === "completed"
                      ? "#18932E"
                      : item?.status === "Delayed"
                      ? "#DFA50E"
                      : "#EE201C",

                  background:
                    item?.status === "completed"
                      ? "#CADBC4"
                      : item?.status === "Delayed"
                      ? "#EFDFC5"
                      : "#F1C6C1",
                }}
              >
                {item?.status}
              </p>
            </td>
            <td>
              <div>
                <CircularProgressbar
                  value={item?.progress}
                  text={`${item?.progress}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "20px",
                    pathTransitionDuration: 0.5,
                    textColor: "#060606",
                    trailColor: "#E0D7D4",
                    backgroundColor: "#EE201C",
                    pathColor:
                      item?.status === "completed"
                        ? "#18932E"
                        : item?.status === "Delayed"
                        ? "#DFA50E"
                        : "#EE201C",
                  })}
                />
              </div>
            </td>
          </tr>
        ))}
      </table>
}
    </div>
  );
}

export default Table;
