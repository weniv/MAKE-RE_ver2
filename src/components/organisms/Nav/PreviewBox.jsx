import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { ResumeContext } from '../../../context/ResumeContext'
import { MainBtn, SaveBtn } from '../../atoms/Button'
import { useReactToPrint } from 'react-to-print'
import { saveData } from '../../../utils/saveData'
import { checkRequiredValidity } from '../../atoms/Input/RequireInput'
import ThemeContext from '../../../context/ThemeContext'
import { theme } from '../../../theme/theme'
import { useResumeStore } from '../../../store/ResumeStore'

export default function PreviewBox({ type, ...props }) {
  const { id } = useParams()
  const { resumeList, saveResumeData } = useResumeStore()
  const currentSection = JSON.parse(localStorage.getItem('section'))

  const { resumeData, formRef } = useContext(ResumeContext)
  const navigate = useNavigate()

  const saveLocalstorage = () => {
    saveResumeData()
    saveData('resumeData', JSON.stringify(resumeData))
    checkRequiredValidity(formRef) // 필수입력폼 검증
    console.log('데이터 저장 완료 - ⭐')
  }

  const movePreview = () => {
    saveResumeData()
    // resumeList.map((el) => {
    //   if (!el.content.profile.name && currentSection?.id === 1) {
    //     alert('이름을 입력하세요')
    //   } else {
    //     saveResumeData()
    //     navigate(`/preview/${id}`)
    //   }
    // })

    // saveData('resumeData', JSON.stringify(resumeData))
    const isRequired = formRef.current?.checkValidity()
    if (isRequired !== false) {
      navigate(`/preview/${id}`)
    }
  }

  const moveWrite = () => {
    navigate(`/write/${id}`)
  }

  const exportPDF = useReactToPrint({
    content: () => props.exportRef.current,
    documentTitle: `이력서`,
  })

  return (
    <Cont>
      {type === 'write' ? (
        <>
          <SaveBtn
            onClick={(e) => {
              e.preventDefault()
              saveLocalstorage()
            }}
            form="requiredForm"
          >
            임시저장
          </SaveBtn>
          <MainBtn type="preview" onClick={movePreview} form="requiredForm">
            미리보기
          </MainBtn>
        </>
      ) : (
        <>
          <SaveBtn onClick={moveWrite}>돌아가기</SaveBtn>
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
