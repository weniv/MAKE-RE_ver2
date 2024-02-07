import styled from 'styled-components'
import Footer from '../components/organisms/Footer/Footer'
import Header from '../components/organisms/Header/Header'
import MyPageNav from '../components/organisms/Nav/MyPageNav'
import DefaultProfile from '../components/templates/Profile/DefaultProfile'
import { MetaData } from '../utils/metaData'

export default function MyProfilePage() {
  const meta = {
    title: 'MAKE:RE',
    description: '쉽고 빠르게 이력서를 커스텀할 수 있는 웹 서비스',
    url: 'https://make-re.weniv.co.kr/',
  }

  return (
    <>
      <MetaData meta={meta} />
      <Header options={{ hasProfile: true, hasCreate: true }} />
      <Cont>
        <MyPageNav currentNaveItem={1} />
        <Main>
          <DefaultProfile />
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
