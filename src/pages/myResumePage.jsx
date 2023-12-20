import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Layout } from '../components/organisms/Component'
import { WriteTitle } from '../components/atoms/Title'
import Header from '../components/organisms/Header/Header'
import { Resume } from '../components/organisms/Component'
import Footer from '../components/organisms/Footer/Footer'
import MyPageNav from '../components/organisms/Nav/MyPageNav'
import PlusIcon from '../assets/icon-+.svg'
import ColorIcon from '../components/atoms/ColorIcon/ColorIcon'
import { createResume, getAllResume } from '../utils/fetchUtils'

export default function MyResumePage() {
  const userId = 1 // 변경필요
  const [resumes, setResumes] = useState([])

  const fetchData = async (id) => {
    try {
      const result = await getAllResume(id)
      setResumes(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData(userId)
  }, [])

  const addNewResume = async () => {
    try {
      const result = await createResume()
      fetchData(userId)
    } catch (err) {
      console.log(err)
    }
  }

  // const fetchData = async (id) => {
  //   try {
  //     const result = await getAllResume(id)
  //     setResumes(result.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   fetchData(userId)
  // }, [])

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
                {resumes &&
                  resumes.map((resume) => (
                    <Resume
                      resume={resume}
                      fetchData={fetchData}
                      userId={userId}
                    />
                  ))}
                <AddCont>
                  <AddBtn onClick={addNewResume}>
                    <ColorIcon iconPath={PlusIcon} type="iconLv1" />
                    이력서 만들기
                  </AddBtn>
                </AddCont>
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
