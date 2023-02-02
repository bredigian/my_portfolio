import React from "react"

const SkillsItem = ({ skill }) => {
  return (
    <li className="skills-container__item d-flex justify-content-between align-items-center w-100">
      <p className="skills-container__item-name m-0">{skill.name}</p>
      {<skill.icon className="skills-container__item-icon" />}
    </li>
  )
}

export default SkillsItem
