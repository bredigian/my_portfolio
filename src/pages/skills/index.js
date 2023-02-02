import React, { useState } from "react"

import { SKILLS } from "../../db/skills"
import { SkillsItem } from "../../components"

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false)
  setTimeout(() => {
    setShowSkills(true)
  }, 2500)
  return (
    <div className="skills d-flex flex-column align-items-center gap-4 p-4">
      <p className="skills-title m-0">Conocimientos y habilidades</p>
      <ul
        className={
          !showSkills
            ? "skills-container d-flex flex-column aling-items-center gap-4 w-100 m-0 p-0"
            : "skills-container show d-flex flex-column aling-items-center gap-4 w-100 m-0 p-0"
        }
      >
        {SKILLS.map((skill) => (
          <SkillsItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  )
}

export default Skills
