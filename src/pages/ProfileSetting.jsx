import styled from 'styled-components'
import Header from '../components/organisms/Header/Header'
import Profile from '../components/templates/Profile/Profile'
import { useState } from 'react'

export default function ProfileSetting() {
  const [isReady, setIsReady] = useState(false)

  return (
    <>
      <Header options={{ isCenter: true }} />
      <Layout>
        <Profile type="userProfileSetting" setIsReady={setIsReady} />
        <Button isReady={isReady}>시작하기</Button>
      </Layout>
    </>
  )
}

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-lv1-color);
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`

const Button = styled.button`
  width: 240px;
  border-radius: 0.625rem;
  background-color: ${(props) =>
    props.isReady === true ? 'var(--primary-color)' : 'var(--gray-lv2-color)'};
  padding: 11px 20px;
  color: ${(props) =>
    props.isReady === true
      ? 'var(--background-color)'
      : 'var(--gray-lv3-color)'};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`
