import styled from 'styled-components'
import Header from '../components/organisms/Header/Header'
import Profile from '../components/templates/Profile/Profile'
import { useContext, useState } from 'react'
import { ResumeContext } from '../context/ResumeContext'
import { saveData } from '../utils/saveData'
import { MetaData } from '../utils/metaData'

export default function ProfileSetting() {
  const [isReady, setIsReady] = useState(false)
  const { resumeData } = useContext(ResumeContext)

  const submitProfile = () => {
    console.log('데이터 저장완료')
    saveData('resumeData', JSON.stringify(resumeData))
  }

  const meta = {
    title: 'MAKE:RE',
    description: '쉽고 빠르게 이력서를 커스텀할 수 있는 웹 서비스',
    url: 'https://make-re.weniv.co.kr/',
  }

  return (
    <>
      <MetaData meta={meta} />
      <Header options={{ isCenter: true }} />
      <Layout>
        <Profile type="userProfileSetting" setIsReady={setIsReady} />
        <Button isReady={isReady} disabled={!isReady} onClick={submitProfile}>
          시작하기
        </Button>
      </Layout>
    </>
  )
}

const Layout = styled.main`
  width: 100vw;
  height: 100%;
  background-color: var(--gray-lv1-color);
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 60px 0 120px 0;
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
