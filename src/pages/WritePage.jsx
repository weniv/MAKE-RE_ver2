import { css, styled } from 'styled-components'
import { useContext, useEffect, useState } from 'react'
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
import questionIcon from '../assets/icon-question-mark.svg'
import closeIcon from '../assets/icon-X.svg'
import ExplainOverlay from '../components/organisms/ExplainOverlay/ExplainOverlay'

export default function WritePage() {
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
  const [overlay, setOverlay] = useState(false)

  const CurrentComponent = components[currentSection.title]

  useEffect(() => {
    saveData('resumeData', JSON.stringify(resumeData))
    const data = JSON.parse(localStorage.getItem('resumeData'))
    if (data) {
      setResumeData(data)
    }
  }, [currentSection])

  return (
    <>
      {overlay && <ExplainOverlay />}
      <Header options={{ hasProfile: true }} />
      <Cont>
        <Main>
          <CurrentComponent />
        </Main>
        <Aside type="write" />
        <ExplainBtn
          type="button"
          onMouseEnter={() => setOverlay(true)}
          onMouseLeave={() => setOverlay(false)}
        >
          <Icon overlay={overlay} />
        </ExplainBtn>
        {/* <ExplainBtn type="button" onClick={() => setOverlay(!overlay)}>
          <Icon overlay={overlay} />
        </ExplainBtn> */}
      </Cont>
      <Footer />
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

const ExplainBtn = styled.button`
  box-shadow: var(--shadow);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2.8rem;
  right: 2.8rem;
  z-index: 1000;
`

const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center center;

  ${(props) =>
    props.overlay
      ? css`
          background-color: var(--gray-lv2-color);
          mask-image: url(${closeIcon});
          -webkit-mask-image: url(${closeIcon});
        `
      : css`
          background-color: black;
          mask-image: url(${questionIcon});
          -webkit-mask-image: url(${questionIcon});
        `}
`
