import React from "react";
import { useState } from "react";
import { useSelectedProjectsValue } from "../Context";
import { useProjectsValue } from "../Context";
import IndividualProject from "./IndividualProject";
const Project = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();
  console.log(projects);
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectID}
        data-doc-id={project.projectID}
        data-testid="project-action"
        classsName={
          active === project.projectID
            ? "active sidebar__project"
            : "sidebar__project"
        }
        onKeyDown={() => {
          setActive(project.projectID);
          setSelectedProject(project.projectID);
        }}
        onClick={() => {
          setActive(project.projectID);
          setSelectedProject(project.projectID);
        }}
      >
        <IndividualProject project={project} />
      </li>
    ))
  );
};

export default Project;
