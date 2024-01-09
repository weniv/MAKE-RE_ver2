import { useState, useContext, useRef } from 'react'
import styled from 'styled-components'
import { Layout } from '../components/organisms/Component'
import { WriteTitle } from '../components/atoms/Title'
import Header from '../components/organisms/Header/Header'
import { Resume } from '../components/organisms/Component'
import Footer from '../components/organisms/Footer/Footer'
import MyPageNav from '../components/organisms/Nav/MyPageNav'
import PlusIcon from '../assets/icon-+.svg'
import ColorIcon from '../components/atoms/ColorIcon/ColorIcon'
import { ResumeContext } from '../context/ResumeContext'
import { resumeItem } from '../data/dummy'

export default function MyResumePage() {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const maxIdRef = useRef(Math.max(...resumeData.map((resume) => resume.id)))

  // const [resumes, setResumes] = useState()

  // useEffect(() => {
  //   // Django API endpoint 설정
  //   const apiUrl = 'your_django_api_endpoint'

  //   // 이력서 데이터 불러오기
  //   const fetchResumes = async () => {
  //     try {
  //       const response = await fetch(apiUrl)
  //       if (response.ok) {
  //         const data = await response.json()
  //         setResumes(data)
  //       } else {
  //         console.error('Failed to fetch resumes')
  //       }
  //     } catch (error) {
  //       console.error('Error fetching resumes:', error)
  //     }
  //   }

  //   fetchResumes()
  // }, [])

  const handleAddResume = () => {
    maxIdRef.current += 1

    const newResume = {
      id: maxIdRef.current,
      ...resumeItem,
    }

    setResumeData((prevResumes) => [...prevResumes, newResume])
  }

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
                description="이력서는 최대 3개까지 생성 및 관리할 수 있습니다."
              />
              <Wrap>
                {resumeData.map((resume) => {
                  return <Resume key={resume.id} id={resume.id} />
                })}
                {resumeData.length <= 2 && (
                  <AddCont>
                    <AddBtn onClick={handleAddResume}>
                      <ColorIcon iconPath={PlusIcon} type="iconLv1" />
                      이력서 만들기
                    </AddBtn>
                  </AddCont>
                )}

                {/* {resumes.map((resume) => {
                  return <Resume key={resume.id} />
                })}
                {resumes.length <= 2 && (
                  <AddCont>
                    <AddBtn onClick={handleAddResume}>
                      <ColorIcon iconPath={PlusIcon} type="iconLv1" />
                      이력서 만들기
                    </AddBtn>
                  </AddCont>
                )} */}
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
