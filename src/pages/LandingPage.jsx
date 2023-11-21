import React from 'react'
import Header from '../components/organisms/Header/Header'
import styled from 'styled-components'
import { MainBtn } from '../components/atoms/Button'
import Footer from '../components/organisms/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import bannerImg from '../assets/banner.png'
import desc1 from '../assets/desc-1.png'
import desc2 from '../assets/desc-2.png'
import desc3 from '../assets/desc-3.png'
import desc4 from '../assets/desc-4.png'

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
              <div className="text-container">
                <p className="title">
                  메이커리 서비스를 통해
                  <br />
                  개발자 이력서를 쉽게 만들어 보세요!
                </p>
                <p className="description">
                  &lt;MAKE:RE&gt;는 취업을 준비하시는 분들을 위한 이력서 작성
                  서비스입니다.
                </p>
                <Button type="create" onClick={moveWrite}>
                  개발자 이력서 만들기
                </Button>
              </div>
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
                  년차, 연락처, 기술 블로그 등 프로필 항목을 편리하게 관리하고
                  <br />
                  이력서 생성 시 간편하게 불러와 사용하세요.
                </p>
              </GuideDescription>
              <GuideImg src={desc1} alt="" />
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
              <GuideImg src={desc2} alt="" />
            </li>
            <li>
              <GuideDescription>
                <span className="tag">커스터마이징</span>
                <p className="title">
                  개성있는 나만의 이력서를
                  <br />
                  생성할 수 있어요.
                </p>
                <p className="description">
                  이력서 항목의 순서를 자유롭게 변경하고 <br />
                  원하는 색상을 지정해 이력서를 커스텀할 수 있어요.
                </p>
              </GuideDescription>
              <GuideImg src={desc3} alt="" />
            </li>
            <li>
              <GuideDescription>
                <span className="tag">PDF 출력</span>
                <p className="title">
                  만든 이력서를 <br />
                  PDF로 출력할 수 있어요.
                </p>
                <p className="description">
                  한 페이지에 컨텐츠가 완벽하게 유지되며
                  <br />
                  잘리지 않는 자연스러운 레이아웃으로 출력할 수 있어요.
                </p>
              </GuideDescription>
              <GuideImg src={desc4} alt="" />
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

  & ul {
    width: 100%;
    height: 100%;
  }
`

const BannerItem = styled.li`
  width: 100%;
  height: 100%;
  background: url(${bannerImg}) no-repeat center bottom / 192rem 80rem #618dff;
  color: var(--background-color);
  margin: auto;

  & .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    max-width: 120rem;
    height: 100%;
    margin: auto;
    padding: 0 1rem;
  }

  & .title {
    font-size: 4rem;
    line-height: 1.4;
    font-weight: 600;
  }

  & .description {
    margin: 2rem 0 3.2rem;
  }
`

const Button = styled.button`
  height: 42px;
  background-color: var(--background-color);
  color: var(--surface-color);
  border-radius: 1rem;
  padding: 1.1rem 2rem;
  line-height: 2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.9;
  }
`
const GuideImg = styled.img`
  min-width: 60rem;
  height: 30rem;
  border-radius: 3rem;
  overflow: hidden;
  border: 2px solid var(--activation-color);
  box-shadow: 0.4rem 0.4rem 2.4rem rgba(0, 0, 0, 0.1);
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
  font-size: 1.8rem;
  font-weight: 600;
  margin-right: auto;
  line-height: 2.4rem;

  & .tag {
    color: var(--primary-color);
  }

  & .title {
    font-size: 4rem;
    line-height: 5.6rem;
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
