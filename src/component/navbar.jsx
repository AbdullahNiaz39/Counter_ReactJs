import React from "react";

const Navbar = ({ totalCounter }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="bagde badge-pill badge-secondary">
            {totalCounter}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
