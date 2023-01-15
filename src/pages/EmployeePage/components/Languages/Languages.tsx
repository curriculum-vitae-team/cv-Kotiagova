import React from 'react'

type LanguagesProps = {
  languagesData: Language[]
}

const Languages: React.FC<LanguagesProps> = ({ languagesData }) => {
  const langs = languagesData.map((l) => <div key={l.id}>{l.language_name}</div>)
  return <div>{langs}</div>
}

export default Languages
