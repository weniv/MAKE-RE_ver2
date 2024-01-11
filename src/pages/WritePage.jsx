import { styled } from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Aside from '../components/templates/Aside/Aside'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import Profile from '../components/templates/Profile/Profile'
import Intro from '../components/templates/Intro/Intro'
import Url from '../components/templates/Url/Url'
import Experience from '../components/templates/Experience/Experience'
import Certificate from '../components/templates/Certificate/Certificate'
import Education from '../components/templates/Education/Education'
import { Career } from '../components/templates/Career'
import { Project } from '../components/templates/Project'
import RemoteContext from '../context/RemoteContext'
import { ResumeContext } from '../context/ResumeContext'
import { saveData } from '../utils/saveData'
import Explain from '../components/organisms/Explain/Explain'
import { MetaData } from '../utils/metaData'

export default function WritePage() {
  const { id } = useParams()
  const { currentSection } = useContext(RemoteContext)
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const components = {
    프로필: Profile,
    자기소개서: Intro,
    커리어: Career,
    프로젝트: Project,
    경험: Experience,
    자격증: Certificate,
    교육: Education,
    '추가 URL': Url,
  }
  const [explainMode, setExplainMode] = useState(false)

  const CurrentComponent = components[currentSection.title]

  useEffect(() => {
    saveData('resumeData', JSON.stringify(resumeData))
    const data = JSON.parse(localStorage.getItem('resumeData'))
    if (data) {
      setResumeData(data)
    }
  }, [currentSection])

  const meta = {
    title: 'MAKE:RE | 로그인',
    description: '메이커리에 로그인 하고 쉽고 빠르게 이력서를 커스텀해보세요',
    url: 'https://make-re.weniv.co.kr/login',
  }

  return (
    <>
      <MetaData meta={meta} />
      <Explain mode={explainMode} setMode={setExplainMode} />
      <ModeCont mode={explainMode}>
        <Header options={{ hasProfile: true }} />
        <Cont mode={explainMode}>
          <Main>
            <CurrentComponent type="resumeProfile" id={id} />
          </Main>
          <Aside type="write" />
        </Cont>
        <Footer />
      </ModeCont>
    </>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
`

const Cont = styled.div`
  width: 100vw;
  padding: 60px 0;
  background-color: var(--gray-lv1-color);

  display: flex;
  gap: 20px;
  justify-content: center;
`

const ModeCont = styled.div`
  ${(props) =>
    props.mode &&
    `
    filter: brightness(0.3);
  `}
`
