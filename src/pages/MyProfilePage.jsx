import styled from 'styled-components'
import Footer from '../components/organisms/Footer/Footer'
import Header from '../components/organisms/Header/Header'
import MyPageNav from '../components/organisms/Nav/MyPageNav'
import Profile from '../components/templates/Profile/Profile'
import { useContext, useState } from 'react'
import { ResumeContext } from '../context/ResumeContext'
import { saveData } from '../utils/saveData'

export default function MyProfilePage() {
  const [isReady, setIsReady] = useState(true)
  const { resumeData } = useContext(ResumeContext)

  const submitProfile = () => {
    console.log('데이터 저장완료')
    saveData('resumeData', JSON.stringify(resumeData))
  }

  return (
    <>
      <Header options={{ hasProfile: true, hasCreate: true }} />
      <Cont>
        <MyPageNav currentNaveItem={1} />
        <Main>
          <Profile type="myProfile" setIsReady={setIsReady} />
          <Button isReady={isReady} disabled={!isReady} onClick={submitProfile}>
            수정하기
          </Button>
        </Main>
      </Cont>
      <Footer />
    </>
  )
}

const Cont = styled.div`
  width: 100vw;
  padding: 60px 0;
  background-color: var(--gray-lv1-color);
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: start;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`

const Button = styled.button`
  width: 240px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isReady === true ? 'var(--primary-color)' : 'var(--gray-lv2-color)'};
  padding: 11px 0;
  color: ${(props) =>
    props.isReady === true
      ? 'var(--background-color)'
      : 'var(--gray-lv3-color)'};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`
