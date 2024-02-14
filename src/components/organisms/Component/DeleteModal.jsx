import Modal from 'react-modal'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'
import AlertIcon from '../../../assets/icon-alert-circle.svg'
import { MainBtn } from '../../atoms/Button'
import styled from 'styled-components'
import { useResumeStore } from '../../../store/ResumeStore'

export default function DeleteModal({ isModalOpen, setModalOpen, id }) {
  const { deleteResume } = useResumeStore()
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  const handleDeleteResume = (id) => {
    deleteResume(id)
    setModalOpen(false)
  }

  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={customStyles}
    >
      <ColorIcon iconPath={AlertIcon} type="error" />
      <Title>이력서를 삭제하시겠어요?</Title>
      <Description>삭제되는 모든 정보는 복구할 수 없어요.</Description>
      <BtnWrap>
        <MainBtn type="fit" onClick={() => setModalOpen(false)}>
          취소
        </MainBtn>
        <ConfirmBtn onClick={() => handleDeleteResume(id)}>확인</ConfirmBtn>
      </BtnWrap>
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  border: 1px solid var(--gray-lv2-color);
  border-radius: 10px;
  padding: 28px 45px;
  box-shadow: 0px 5px 15px rgba(71, 73, 77, 0.1);
`

const Title = styled.h5`
  font-weight: 700;
  line-height: 22px;
  color: var(--surface-color);
  margin: 12px 0;
`

const Description = styled.p`
  color: var(--gray-lv4-color);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
`

const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
`

const ConfirmBtn = styled.button`
  padding: 1.1rem 2rem;
  border: 1px solid var(--gray-lv2-color);
  border-radius: 10px;
  background-color: inherit;
  font-size: 1.4rem;
  color: var(--surface-color);
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: var(--gray-lv1-color);
  }
`
