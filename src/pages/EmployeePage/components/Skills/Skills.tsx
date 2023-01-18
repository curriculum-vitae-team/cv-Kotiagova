import React from 'react'

type SkillsProps = {
  skillsData: Skill[]
}

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  const skills = skillsData.map((skill) => <div key={skill.id}>{skill.skill_name}</div>)

  return <div>{skills}</div>
}

export default Skills
