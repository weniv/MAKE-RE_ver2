import styled from 'styled-components'
import Footer from '../components/organisms/Footer/Footer'
import Header from '../components/organisms/Header/Header'
import MyPageNav from '../components/organisms/Nav/MyPageNav'
import DefaultProfile from '../components/templates/Profile/DefaultProfile'
import { ProfileContext } from '../context/ProfileContext'
import { useContext, useState } from 'react'
import { saveData } from '../utils/saveData'
import { MetaData } from '../utils/metaData'

export default function MyProfilePage() {
  const [isReady, setIsReady] = useState(true)
  const { profileData } = useContext(ProfileContext)

  const saveProfile = (data) => {
    if (profileData.name) {
      saveData('profileData', JSON.stringify(data))
      alert('프로필이 저장되었습니다.3232234')
    } else {
      alert('이름을 입력해주세요.')
    }
  }

  const meta = {
    title: 'MAKE:RE',
    description: '쉽게 빠르게 이력서를 커스텀할 수 있는 웹 서비스',
    url: 'https://make-re.weniv.co.kr/',
  }

  return (
    <>
      <MetaData meta={meta} />
      <Header options={{ hasProfile: true, hasCreate: true }} />
      <Cont>
        <MyPageNav currentNaveItem={1} />
        <Main>
          <DefaultProfile setIsReady={setIsReady} />
          <Button
            isReady={isReady}
            disabled={!isReady}
            onClick={() => saveProfile(profileData)}
          >
            저장하기
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
