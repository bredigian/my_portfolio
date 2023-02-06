import React, { useState } from "react"

import { BsChevronDown } from "react-icons/bs"

const ProjectsItem = ({ project, language }) => {
  const [showDescription, setShowDescription] = useState(false)
  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }
  return (
    <div
      className={
        !showDescription
          ? "projects-container__item d-flex flex-column align-items-center gap-3 p-3"
          : "projects-container__item expanded d-flex flex-column align-items-center gap-3 p-3"
      }
    >
      <img
        src={project.img}
        alt={project.title}
        className="projects-container__item-image"
      />
      <div className="projects-container__item-description d-flex flex-column align-items-center gap-3">
        <div className="projects-container__item-description__main d-flex flex-row align-items-center justify-content-between">
          <p className="projects-container__item-description__main-title m-0">
            {project.title}
          </p>
          <BsChevronDown
            className={
              !showDescription
                ? "projects-container__item-description__main-icon"
                : "projects-container__item-description__main-icon open"
            }
            onClick={handleShowDescription}
          />
        </div>
        <p className="projects-container__item-description-secondary m-0">
          {language === "Español"
            ? project.description_es
            : project.description_en}
        </p>
        <a
          className="projects-container__item-description-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          {language === "Español" ? "Link al proyecto" : "Link to project"}
        </a>
      </div>
    </div>
  )
}

export default ProjectsItem
