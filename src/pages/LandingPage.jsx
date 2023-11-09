import React from 'react'
import Header from '../components/organisms/Header/Header'
import styled from 'styled-components'
import { MainBtn } from '../components/atoms/Button'
import Footer from '../components/organisms/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  const moveWrite = () => {
    navigate('/MAKE-RE_ver2/write')
  }
  return (
    <>
      <Header
        options={{
          isCenter: false,
          hasProfile: true,
          hasCreate: true,
          isWhite: false,
        }}
      />
      <Main>
        <SliderBanner>
          <ul>
            <BannerItem>
              <p className="title">
                메이커리 서비스를 통해
                <br />
                개발자 이력서를 쉽게 만들어 보세요!
              </p>
              <p className="description">
                &lt;MAKE:RE&gt;는 취업을 준비하시는 분들을 위한 이력서 작성
                서비스입니다.
              </p>
              <MainBtn type="create" onClick={moveWrite}>
                이력서 만들기
              </MainBtn>
            </BannerItem>
          </ul>
        </SliderBanner>
        <GuideContainer>
          <NewInfoContainer>
            <p className="title">메이커리 새소식</p>
            <p className="date">2023.03.15</p>
            <p>프로필 이미지 설정 기능이 업데이트 되었습니다.</p>
          </NewInfoContainer>
          <GuideList>
            <li>
              <GuideDescription>
                <span className="tag">프로필 작성</span>
                <p className="title">
                  편리하게 프로필을 <br />
                  작성, 관리할 수 있어요.
                </p>
                <p className="description">
                  이러이러하게 저러저러한 기능을 활용해서
                  <br /> 편리하게 프로필을 관리하세요.
                </p>
              </GuideDescription>
              <GuideImg src="" alt="" />
            </li>
            <li>
              <GuideDescription>
                <span className="tag">이력서 관리</span>
                <p className="title">
                  지원하는 회사에 맞춰
                  <br />
                  이력서를 관리할 수 있어요.
                </p>
                <p className="description">
                  회사가 원하는 인재상, 기술 스택에 맞춰
                  <br />
                  최대 3개까지 이력서를 생성 및 관리할 수 있어요.
                </p>
              </GuideDescription>
              <GuideImg src="" alt="" />
            </li>
            <li>
              <GuideDescription>
                <span className="tag">커스터마이징</span>
                <p className="title">
                  나만의 이력서를
                  <br /> 생성할 수 있어요.
                </p>
                <p className="description">
                  이력서 항목의 순서를 자유롭게 변경하고 <br />
                  원하는 색상을 지정해 이력서를 커스텀할 수 있어요.
                </p>
              </GuideDescription>
              <GuideImg src="" alt="" />
            </li>
            <li>
              <GuideDescription>
                <span className="tag">PDF 출력</span>
                <p className="title">
                  만든 이력서를 <br />
                  PDF로 출력할 수 있어요.
                </p>
                <p className="description">
                  한 페이지에 컨텐츠가 완벽하게 유지되며 잘리지 않는
                  <br />
                  자연스러운 레이아웃으로 출력할 수 있어요.
                </p>
              </GuideDescription>
              <GuideImg src="" alt="" />
            </li>
          </GuideList>
        </GuideContainer>
        <StartContainer>
          <p className="title">지금 바로 메이커리를 시작하세요!</p>
          <p className="description">
            개발자 이력서를 편리하게 만드실 수 있을 거예요.
          </p>
          <MainBtn type="create" onClick={moveWrite}>
            이력서 만들기
          </MainBtn>
        </StartContainer>
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  color: var(--surface-color);
  background-color: var(--background-color);
`

const SliderBanner = styled.section`
  width: 100%;
  height: 80rem;
  background-color: var(--activation-color);
  text-align: center;

  & ul {
    width: 100%;
    height: 100%;
  }
`

const BannerItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & .title {
    font-size: 4rem;
    line-height: 1.4;
    font-weight: 600;
    color: var(--surface-color);
  }

  & .description {
    margin: 2rem auto 3.2rem;
  }
`
const GuideImg = styled.img`
  min-width: 60rem;
  height: 30rem;
  border-radius: 3rem;
  overflow: hidden;
  box-shadow: var(--shadow);
`

const GuideContainer = styled.div`
  width: 119rem;
  margin: 6rem auto;
`

const GuideList = styled.ul`
  width: 111rem;
  margin: 8rem auto 10rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  & li {
    display: flex;
    align-items: center;

    &:nth-child(even) {
      flex-direction: row-reverse;

      & div {
        margin: 0;
        margin-left: auto;
      }
    }
  }
`
const GuideDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin-right: auto;
  line-height: 1.4;

  & .tag {
    font-size: 1.8rem;
    color: var(--primary-color);
  }

  & .title {
    font-size: 4rem;
    margin: 1.2rem 0 2.4rem;
  }
`

const NewInfoContainer = styled.div`
  border: 1px solid var(--gray-lv2-color);
  width: 100%;
  height: 7rem;
  border-radius: 1rem;
  background-color: var(--gray-lv1-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1.2rem;

  &::after {
    content: '';
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--primary-color);
  }

  & .title {
    font-weight: 700;
    color: var(--primary-color);
  }

  & .date {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--gray-lv3-color);
  }
`

const StartContainer = styled.div`
  background-color: var(--gray-lv1-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;

  & .title {
    font-size: 3.2rem;
    font-weight: 600;
    color: var(--surface-color);
  }

  & .description {
    margin: 2rem auto 3.2rem;
  }
`
