import React from 'react'

type LanguagesProps = {
  languagesData: Language[]
}

const Languages: React.FC<LanguagesProps> = ({ languagesData }) => {
  const langs = languagesData.map((language) => (
    <div key={language.id}>{language.language_name}</div>
  ))

  return <div>{langs}</div>
}

export default Languages
