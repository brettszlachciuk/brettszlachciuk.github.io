import React from "react";
import Thumbnail from "./Thumbnail";

const ProjectsNav = () => {
  return (
    <div>
      <div>
        <h1>Projects</h1>
        <p> Project links</p>
        <li>
          <Thumbnail
            link="/WebsiteComponents/Portfolio"
            image=""
            title="PortfolioPage"
            category="ProjectPage"
          />
        </li>
        <li>
          <Thumbnail
            link="/WebsiteComponents/PoliticDB"
            image=""
            title="PoliticDBPage"
            category="PoliticDBPage"
          />
        </li>
      </div>
    </div>
  );
};

export default ProjectsNav;
