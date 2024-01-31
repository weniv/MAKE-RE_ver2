import { getCurrentDate } from '../utils'

export const resumeItem = {
  profile: {
    profileImg: '',
    name: '',
    enName: '',
    phoneNumber: '',
    fullEmail: '',
    blog: '',
    careerLength: 0,
    skills: [],
    github: '',
  },
  intro: '',
  career: [
    {
      id: 1,
      title: '',
      startDate: '',
      endData: '',
      inProgress: false,
      works: '',
      position: '',
      rank: '',
    },
  ],
  project: [
    {
      id: 1,
      title: '',
      demoLink: '',
      githubLink: '',
      snsLink: '',
      description: '',
      people: '',
      startDate: '',
      endDate: '',
      inProgress: false,
      contributions: [''],
      skills: [''],
    },
  ],
  experience: [
    {
      id: 1,
      title: '',
      startDate: '',
      endDate: '',
      inProgress: false,
      description: '',
      link: '',
    },
  ],
  certificate: [{ id: 1, title: '', date: '', issuer: '', score: '' }],
  education: [
    {
      id: 1,
      title: '',
      startDate: '',
      endDate: '',
      inProgress: false,
      description: '',
    },
  ],
  url: [{ id: 1, title: '', link: '' }],
}

export const resumeList = [
  {
    id: 1,
    lastModified: getCurrentDate(),
    ...resumeItem,
  },
]

export const remoteList = [
  { id: 1, title: '프로필' },
  { id: 2, title: '자기소개서' },
  { id: 3, title: '커리어' },
  { id: 4, title: '프로젝트' },
  { id: 5, title: '경험' },
  { id: 6, title: '자격증' },
  { id: 7, title: '교육' },
  { id: 8, title: '추가 URL' },
]

export const profileData = {
  profileImg: '',
  name: '',
  enName: '',
  phoneNumber: '',
  fullEmail: '',
  blog: '',
  careerLength: 0,
  skills: [],
  github: '',
}
