import React from "react";
import { Link } from "react-router-dom";

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image" />
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
