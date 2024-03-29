import React from "react";

// !assets
import { anglearrow, bell, search } from "../assets/Dashboard";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__left">
      <div className="Navbar__left__back">
        <img src={anglearrow} alt="anglearrow" />
      </div>
      <h1>Dashboard</h1>
      </div>

      <div className="Navbar__right">
        <div className="Navbar__right__search">
          <img src={search} alt="search" />
          <input placeholder="search for anything.." />
        </div>
        <div className="Navbar__right__bell">
          <img src={bell} alt="bell" />
        </div>
        <div className="Navbar__right__manager">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="user"
          />
          <div className="Navbar__right__manager__right">
            <h6>Alex Vause</h6>
            <p>Product Manager</p>
          </div>
          <img
            className="Navbar__right__manager__arrrow"
            src={anglearrow}
            alt="arrowangle"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
