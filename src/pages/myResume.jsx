import styled from 'styled-components'
import { Layout } from '../components/organisms/Component'
import { WriteTitle } from '../components/atoms/Title'
import Header from '../components/organisms/Header/Header'
import { Resume } from '../components/organisms/Component'
import Footer from '../components/organisms/Footer/Footer'
import MyPageNav from '../components/organisms/Nav/MyPageNav'

export default function myResumePage() {
  return (
    <>
      <Header options={{ hasProfile: true, hasCreate: true }} />
      <Cont>
        <MyPageNav />
        <Main>
          <Layout>
            <Section>
              <WriteTitle
                title="이력서 관리"
                description="이력서는 최대 3개까지만 생성 및 관리할 수 있습니다."
              />
              <Wrap>
                <Resume />
                <Resume />
              </Wrap>
            </Section>
          </Layout>
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
  gap: 20px;
  background-color: var(--background-color);
  border-radius: 16px;
  min-height: 732px;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);

  section {
    box-shadow: none;
  }
`

const Section = styled.div`
  padding: 0 52px;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
