import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/organisms/Header/Header'
import { MainBtn } from '../components/atoms/Button'

export default function QuitPage() {
  const navigate = useNavigate()

  const moveMain = () => {
    navigate('/MAKE-RE_ver2/')
  }

  return (
    <>
      <Header options={{ isCenter: true, isWhite: true }} />
      <main>
        <Wrap>
          <img src="images/favicon.svg" alt="메이커리 파비콘" />
          <Title>회원 탈퇴 완료</Title>
          <Content>메이커리를 이용해 주셔서 감사합니다.</Content>
          <MainBtn type="full" onClick={moveMain}>
            메인으로
          </MainBtn>
        </Wrap>
      </main>
    </>
  )
}

const Wrap = styled.div`
  width: 322px;
  margin: 20rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }
`

const Title = styled.h2`
  color: var(--surface-color);
  font-size: 32px;
  margin: 24px 0;
  font-weight: 600;
  line-height: 40px;
`

const Content = styled.p`
  color: var(--gray-lv4-color);
  margin-bottom: 24px;
  line-height: 22px;
`
