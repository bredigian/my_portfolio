import React, { useState } from "react"

import { PROJECTS } from "../../db/projects"
import { ProjectsItem } from "../../components"

const Projects = ({ language }) => {
  const [showProjects, setShowProjects] = useState(false)
  setTimeout(() => {
    setShowProjects(true)
  }, 2500)
  return (
    <div className="projects d-flex flex-column align-items-center gap-4 p-4">
      <p className="projects-title">
        {language === "Español"
          ? "Mis proyectos realizados"
          : "My completed projects"}
      </p>
      <ul
        className={
          !showProjects
            ? "projects-container d-flex flex-row align-items-start gap-4 m-0 p-0"
            : "projects-container show d-flex flex-row align-items-start gap-4 m-0 p-0"
        }
      >
        {PROJECTS.map((project) => (
          <ProjectsItem
            key={project.id}
            project={project}
            language={language}
          />
        ))}
      </ul>
    </div>
  )
}

export default Projects
