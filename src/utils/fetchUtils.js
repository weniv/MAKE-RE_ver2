import axios from 'axios'

const newResume = {
  account_id: 1,
  name: '홍길동님의 이력서',
  profiles: {
    resume_id: 0,
    profile_image: 'string',
    name: 'string',
    en_name: 'string',
    phone_number: 'string',
    email: 'string',
    blog_url: 'string',
    github_url: 'string',
    skills: ['string'],
    career_years: 0,
  },
  introductions: {
    resume_id: 0,
    introduction: 'string',
  },
  careers: [
    {
      resume_id: 0,
      title: 'string',
      position: 'string',
      start_date: '2023-12-20',
      end_date: '2023-12-20',
      description: 'string',
    },
  ],
  projects: [
    {
      resume_id: 0,
      title: 'string',
      start_date: '2023-12-20',
      end_date: '2023-12-20',
      description: 'string',
      project_link: 'string',
      github_link: 'string',
      sns_link: 'string',
      skills: ['string'],
      contributions: ['string'],
      people: 'string',
    },
  ],
  experiences: [
    {
      resume_id: 0,
      title: 'string',
      start_date: '2023-12-20',
      end_date: '2023-12-20',
      description: 'string',
      link: 'string',
    },
  ],
  certificates: [
    {
      resume_id: 0,
      title: 'string',
      date: '2023-12-20',
      issuer: 'string',
      score: 'string',
    },
  ],
  educations: [
    {
      resume_id: 0,
      title: 'string',
      start_date: '2023-12-20',
      end_date: '2023-12-20',
      description: 'string',
    },
  ],
  urls: [
    {
      resume_id: 0,
      link: 'string',
      content: 'string',
    },
  ],
}

export const getAllResume = async (userId) => {
  try {
    const result = await axios.get(`/api/v1/resume?id=${userId}`)
    return result
  } catch (err) {
    console.log(err)
  }
}

export const createResume = async () => {
  try {
    const result = await axios.post(`/api/v1/resume/`, newResume)
    return result
  } catch (err) {
    console.log(err)
  }
}

export const updateResume = async (resumeId, updateData) => {
  try {
    const result = await axios.patch(`/api/v1/resume/${resumeId}`, updateData)
    return result
  } catch (err) {
    console.log(err)
  }
}

export const deleteResume = async (resumeId) => {
  try {
    const result = await axios.delete(`/api/v1/resume/${resumeId}`)
    return result
  } catch (err) {
    console.log(err)
  }
}
