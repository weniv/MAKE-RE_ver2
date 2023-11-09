import Modal from 'react-modal'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import EditIcon from '../../../assets/icon-pencil.svg'
import MoreIcon from '../../../assets/icon-more.svg'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'
import AlertIcon from '../../../assets/icon-alert-circle.svg'
import { DefaultInput } from '../../atoms/Input'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default function Resume() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isEditable, setEditable] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  // 이력서 메뉴 외부 클릭 시 닫기
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [menuRef])

  return (
    <>
      <Cont>
        <Wrap>
          <TitleWrap>
            {isEditable ? (
              <DefaultInput type="resumeTitle" />
            ) : (
              <>
                <Title>홍길동의 이력서</Title>
                <button onClick={() => setEditable(true)}>
                  <ColorIcon
                    iconPath={EditIcon}
                    type="iconLv2"
                    width="16px"
                    height="16px"
                  />
                </button>
              </>
            )}
          </TitleWrap>
          <MoreBtn onClick={handleToggleMenu} ref={menuRef}>
            <ColorIcon
              iconPath={MoreIcon}
              type="iconLv2"
              width="20px"
              height="20px"
            />
            {isMenuOpen && (
              <MenuList>
                <li>
                  <Link to="/MAKE-RE_ver2">이력서 수정</Link>
                </li>
                <li>
                  <button onClick={() => setModalOpen(true)}>
                    이력서 삭제
                  </button>
                </li>
              </MenuList>
            )}
          </MoreBtn>
        </Wrap>

        <EditDate>마지막 수정: 2023.11.01</EditDate>
      </Cont>
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <ColorIcon iconPath={AlertIcon} type="error" />
        <h5>이력서를 삭제하시겠어요?</h5>
        <p>삭제되는 모든 정보는 복구할 수 없어요.</p>
        <BtnWrap>
          <CancelBtn onClick={() => setModalOpen(false)}>취소</CancelBtn>
          <ConfirmBtn>확인</ConfirmBtn>
        </BtnWrap>
      </StyledModal>
    </>
  )
}

const Cont = styled.div`
  border: 1px solid var(--gray-lv2-color);
  padding: 18px 20px;
  border-radius: 16px;
  max-width: 786px;
`

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h3`
  margin-right: 8px;
  font-weight: 700;
  color: var(--surface-color);
`

const EditDate = styled.span`
  color: var(--gray-lv4-color);
  font-size: 12px;
`

const MoreBtn = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuList = styled.ul`
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  width: 150px;
  background-color: var(--background-color);
  padding: 9px 8px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(71, 73, 77, 0.1);
  border: 1px solid var(--gray-lv2-color);

  li {
    border-radius: 10px;
    transition: background-color 0.1s ease-in;

    button,
    a {
      font-size: 14px;
      display: inline-block;
      color: var(--surface-color);
      width: 100%;
      text-align: left;
      line-height: 20px;
      padding: 5px 10px;
      border-radius: 10px;
    }

    &:hover {
      background-color: var(--gray-lv1-color);
    }
  }
`

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

  h5 {
    font-weight: 700;
    line-height: 22px;
    color: var(--surface-color);
    margin: 12px 0;
  }

  p {
    color: var(--gray-lv4-color);
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`

const BtnWrap = styled.div`
  button {
    padding: 11px 20px;
    border-radius: 10px;
  }
`

const CancelBtn = styled.button`
  background-color: var(--primary-color);
  color: #fff;
`
const ConfirmBtn = styled.button`
  color: var(--surface-color);
  border: 1px solid var(--gray-lv2-color);
  background-color: var(--background-color);
  margin-left: 12px;
`
