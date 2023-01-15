import React from 'react'

type SkillsProps = {
  skillsData: Skill[]
}

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  const skills = skillsData.map((s) => <div key={s.id}>{s.skill_name}</div>)
  return <div>{skills}</div>
}

export default Skills
