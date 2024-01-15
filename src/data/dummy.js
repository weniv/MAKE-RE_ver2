import { getCurrentDate } from '../utils'

export const resumeList = [
  {
    id: 1,
    name: '새로운 이력서',
    lastModified: getCurrentDate(),
    profile: {
      profileImg: 'https://api.mandarin.weniv.co.kr/1687337079735.png', // 프로필 이미지 테스트용
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
        startData: '',
        endData: '',
        inProgress: false,
        works: '',
      },
    ],
    project: [
      {
        id: 1,
        title: '',
        demoLink: '',
        githubLink: '',
        snsLink: '',
        outline: '',
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
      },
    ],
    certificate: [{ id: 1, title: '', date: '' }],
    education: [
      { id: 1, title: '', startDate: '', endDate: '', inProgress: false },
    ],
    url: [{ id: 1, title: '', link: '' }],
  },
]

export const resumeItem = {
  name: '새로운 이력서',
  profile: {
    profileImg: 'https://api.mandarin.weniv.co.kr/1687337079735.png', // 프로필 이미지 테스트용
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
      startData: '',
      endData: '',
      inProgress: false,
      works: '',
    },
  ],
  project: [
    {
      id: 1,
      title: '',
      demoLink: '',
      githubLink: '',
      snsLink: '',
      outline: '',
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
    },
  ],
  certificate: [{ id: 1, title: '', date: '' }],
  education: [
    { id: 1, title: '', startDate: '', endDate: '', inProgress: false },
  ],
  url: [{ id: 1, title: '', link: '' }],
}

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
  profileImg: 'https://api.mandarin.weniv.co.kr/1687337079735.png', // 프로필 이미지 테스트용
  name: '',
  enName: '',
  phoneNumber: '',
  fullEmail: '',
  blog: '',
  careerLength: 0,
  skills: [],
  github: [],
  intro: '',
}
