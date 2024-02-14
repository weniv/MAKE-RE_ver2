import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import Header from '../components/organisms/Header/Header'
import Aside from '../components/templates/Aside/Aside'
import ProfilePreview from '../components/templates/Profile/ProfilePreview'
import IntroPreview from '../components/templates/Intro/IntroPreview'
import styled from 'styled-components'
import ExperiencePreview from '../components/templates/Experience/ExperiencePreview'
import CertificatePreview from '../components/templates/Certificate/CertificatePreview'
import EducationPreview from '../components/templates/Education/EducationPreview'
import UrlPreview from '../components/templates/Url/UrlPreview'
import CareerPreview from '../components/templates/Career/CareerPreview'
import { ProjectPreview } from '../components/templates/Project'
import Footer from '../components/organisms/Footer/Footer'
import RemoteContext from '../context/RemoteContext'
// import { lightTheme } from '../theme/theme'
import { remoteList } from '../data/dummy'
import { useParams } from 'react-router-dom'
import { MetaData } from '../utils/metaData'

export const LocalContext = createContext(null)

export default function PreviewPage() {
  const { id } = useParams()

  const resumeOrder = JSON.parse(localStorage.getItem('resumeOrder'))
  const exportRef = useRef(null)
  const scrollRef = useRef([])
  const [navList, setNavList] = useState(resumeOrder ? resumeOrder : remoteList)
  const { currentSection, updateCurrentSection } = useContext(RemoteContext)

  useEffect(() => {
    updateCurrentSection({ id: 1, title: '프로필' })
  }, [])

  const getLocalData = () => {
    const data = localStorage.getItem('resumeData')
    return JSON.parse(data)
  }

  // const [data, setData] = useState(getLocalData)
  const [resumeData, setResumeData] = useState(getLocalData())
  const [selectedResume, setSelectedResume] = useState({})

  useEffect(() => {
    const selectedResume = resumeData?.find(
      (resume) => String(resume.id) === id
    )
    setSelectedResume(selectedResume || {})
  }, [id, resumeData])

  const components = {
    프로필: ProfilePreview,
    자기소개서: IntroPreview,
    커리어: CareerPreview,
    프로젝트: ProjectPreview,
    경험: ExperiencePreview,
    자격증: CertificatePreview,
    교육: EducationPreview,
    '추가 URL': UrlPreview,
  }

  const CurrentComponent = navList.map((el, index) => {
    const Component = components[el.title]
    return <Component key={index} ref={scrollRef} />
  })

  // 각 섹션의 ref를 저장할 배열
  // 섹션 수에 따라 조정
  // const sectionRefs = [
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  //   useRef(null),
  // ]

  // const handleScroll = () => {
  // 현재 스크롤 위치가 최상단인지 확인
  // const isAtTop = window.scrollY === 0
  // const currentPosition = isAtTop
  //   ? window.scrollY
  //   : window.scrollY + window.innerHeight / 2

  // // 가장 가까운 섹션 찾기
  // const closestSection = sectionRefs.find((ref) => {
  //   const element = ref.current
  //   if (element) {
  //     const { offsetTop, offsetHeight } = element
  //     if (isAtTop) {
  //       // 최상단에 있을 때는 화면 상단에 가장 가까운 요소를 찾음
  //       return offsetTop >= window.scrollY && offsetTop < window.innerHeight
  //     } else {
  //       // 그 외에는 화면 중앙에 가장 가까운 요소를 찾음
  //       return (
  //         offsetTop <= currentPosition &&
  //         offsetTop + offsetHeight > currentPosition
  //       )
  //     }
  //   }
  //   return false
  // })

  // console.log('지금 활성화되어야하는 메뉴는: ', closestSection)
  // 내비게이션 메뉴 활성화 로직 (선택적)
  // 예: closestSection에 해당하는 메뉴 아이템 활성화
  // }

  // 스크롤 이벤트 리스너 추가
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const meta = {
    title: 'MAKE:RE | 이력서 미리보기',
    description: '쉽고 빠르게 이력서를 커스텀할 수 있는 웹 서비스',
    url: 'https://make-re.weniv.co.kr/',
  }

  return (
    <>
      <MetaData meta={meta} />
      <Header options={{ hasProfile: true }} />
      <LocalContext.Provider value={{ selectedResume, setSelectedResume }}>
        <Cont>
          <Main ref={exportRef}>
            <Layout className="cont-print">{CurrentComponent}</Layout>
          </Main>
          <Aside type="preview" exportRef={exportRef} scrollRef={scrollRef} />
        </Cont>
      </LocalContext.Provider>
      <Footer />
    </>
  )
}

const Cont = styled.div`
  color: var(--surface-color);
  width: 100vw;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  padding: 60px 0 120px;
  background-color: var(--gray-lv1-color);
  min-height: 100vh;
`

const Main = styled.main`
  background-color: var(--background-color);
  border-radius: 16px;
  width: fit-content;
  height: fit-content;

  @page {
    size: 210mm 297mm;
    margin: 20mm;
  }
  @media print {
    * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    zoom: 80%;
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 890px;
  padding: 74px 74px;
  @media print {
    padding: 0;
  }
`
