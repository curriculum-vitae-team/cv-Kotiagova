import { gql } from '@apollo/client'

export const LOGIN_QUERY = gql`
  query LOGIN($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        id
        email
        is_verified
      }
      access_token
    }
  }
`

export const EMPLOYEES_QUERY = gql`
  query GET_EMPLOYEES {
    users {
      id
      email
      department {
        id
        name
      }
      position {
        id
        name
      }
      profile {
        first_name
        last_name
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      cvs {
        id
        created_at
        name
        description
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
        is_template
      }
    }
  }
`

export const EMPLOYEE_QUERY = gql`
  query GET_EMPLOYEE($id: ID!) {
    user(id: $id) {
      id
      email
      profile {
        first_name
        last_name
        avatar
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      cvs {
        id
        name
        description
      }
      position {
        id
        name
      }
      department {
        id
        name
      }
    }
  }
`

export const GET_DEPARTMENTS_AND_POSITIONS = gql`
  query GET_DEPARTMENTS_AND_POSITIONS {
    departments {
      id
      name
    }
    positions {
      id
      name
    }
  }
`

export const GET_LANGUAGES_AND_SKILLS_AND_PROJECTS = gql`
  query GET_LANGUAGES_AND_SKILLS_AND_PROJECTS {
    languages {
      id
      name
    }
    skills {
      id
      name
    }
    projects {
      id
      name
    }
  }
`
export const GET_RESUMES = gql`
  query GET_RESUMES {
    cvs {
      id
      name
      description
      projects {
        id
      }
      skills {
        skill_name
        mastery
      }
      languages {
        language_name
        proficiency
      }
      is_template
    }
  }
`
