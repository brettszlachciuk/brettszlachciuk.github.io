import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-sub">
        <Link to="/WebsiteComponents/Contact" className="item">
          Contact
        </Link>
        <Link to="/WebsiteComponents/About" className="item">
          About
        </Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Navigation;
