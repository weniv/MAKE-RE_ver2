import { useContext } from 'react'
import { styled } from 'styled-components'
import { MainBtn, SaveBtn } from '../../atoms/Button'
import { ResumeContext } from '../../../context/ResumeContext'
import { useNavigate } from 'react-router-dom'

export default function PreviewBox({ type }) {
  const { resumeData } = useContext(ResumeContext)
  const navigate = useNavigate()

  const saveLocalstorage = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData))
    console.log('데이터 저장 완료 - ⭐')
  }

  const movePreview = () => {
    navigate('/MAKE-RE_ver2/preview')
  }

  const moveHome = () => {
    navigate('/MAKE-RE_ver2/')
  }

  return (
    <Cont>
      {type === 'write' ? (
        <>
          <SaveBtn onClick={saveLocalstorage}>임시저장</SaveBtn>
          <MainBtn type="preview" onClick={movePreview}>
            미리보기
          </MainBtn>
        </>
      ) : (
        <>
          <SaveBtn onClick={moveHome}>돌아가기</SaveBtn>
          <MainBtn type="preview">PDF로 내보내기</MainBtn>
        </>
      )}
    </Cont>
  )
}

const Cont = styled.div`
  padding: 14px;
  border-radius: 16px;
  background-color: var(--bg-color);
  display: inline-flex;
  gap: 10px;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`
