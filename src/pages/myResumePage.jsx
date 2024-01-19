import { useRef } from 'react'
import styled from 'styled-components'
import { Layout } from '../components/organisms/Component'
import { WriteTitle } from '../components/atoms/Title'
import Header from '../components/organisms/Header/Header'
import { Resume } from '../components/organisms/Component'
import Footer from '../components/organisms/Footer/Footer'
import MyPageNav from '../components/organisms/Nav/MyPageNav'
import PlusIcon from '../assets/icon-+.svg'
import ColorIcon from '../components/atoms/ColorIcon/ColorIcon'
import { resumeItem } from '../data/dummy'
import { MetaData } from '../utils/metaData'
import { useResumeStore } from '../store/ResumeStore'

export default function MyResumePage() {
  const { resumeList, createNewResume } = useResumeStore()
  const id =
    resumeList.length === 0 ? 0 : Math.max(...resumeList.map((el) => el.id))
  const maxIdRef = useRef(id)

  const handleAddResume = () => {
    maxIdRef.current += 1
    const val = { id: maxIdRef.current, content: resumeItem }
    createNewResume(val)
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
        <MyPageNav currentNaveItem={0} />
        <Main>
          <Layout>
            <Section>
              <WriteTitle
                title="이력서 관리"
                description="이력서는 최대 3개까지 생성 및 관리할 수 있습니다."
              />
              <Wrap>
                {resumeList.map((resume) => {
                  return (
                    <Resume
                      key={resume.id}
                      id={resume.id}
                      lastModified={resume.lastModified}
                    />
                  )
                })}
                {resumeList.length <= 2 && (
                  <AddCont>
                    <AddBtn onClick={handleAddResume}>
                      <ColorIcon iconPath={PlusIcon} type="iconLv1" />
                      이력서 만들기
                    </AddBtn>
                  </AddCont>
                )}
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

const AddCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--gray-lv1-color);
  border-radius: 16px;
  padding: 35px 0;
  margin: 0 auto;
`

const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--surface-color);
  font-size: 14px;
  font-weight: 700;
  padding: 13px 20px 13px 16px;
  border-radius: 10px;
  background-color: var(--background-color);
`
