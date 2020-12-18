import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Travel
          </Link>
        </div>
      </nav>
    </>
  );
};
