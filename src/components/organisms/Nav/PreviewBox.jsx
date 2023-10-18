import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { ResumeContext } from '../../../context/ResumeContext'
import PageTypeContext from '../../../context/PageContext'
import { MainBtn, SaveBtn } from '../../atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'

export default function PreviewBox({ type, ...props }) {
  const { resumeData } = useContext(ResumeContext)
  const { togglePageType } = useContext(PageTypeContext)
  const navigate = useNavigate()

  const saveLocalstorage = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData))
    console.log('데이터 저장 완료 - ⭐')
  }

  const movePreview = async () => {
    await localStorage.setItem('resumeData', JSON.stringify(resumeData))
    navigate('/MAKE-RE_ver2/preview')
    togglePageType()
  }

  const moveHome = () => {
    navigate('/MAKE-RE_ver2/')
    togglePageType()
  }

  const exportPDF = useReactToPrint({
    content: () => props.exportRef.current,
    documentTitle: `이력서`,
  })

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
          <MainBtn type="preview" onClick={exportPDF}>
            PDF로 내보내기
          </MainBtn>
        </>
      )}
    </Cont>
  )
}

const Cont = styled.div`
  padding: 14px;
  border-radius: 16px;
  display: inline-flex;
  gap: 10px;
  box-shadow: var(--shadow);
  background-color: var(--background-color);
`
