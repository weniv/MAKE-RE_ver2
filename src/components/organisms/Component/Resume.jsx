import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import EditIcon from '../../../assets/icon-pencil.svg'
import MoreIcon from '../../../assets/icon-more.svg'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'
import { DefaultInput } from '../../atoms/Input'
import DeleteModal from './DeleteModal'

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
              <DefaultInput type="resumeTitle" inputData="기존 이력서 이름" />
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
          <MoreBtn
            onClick={handleToggleMenu}
            ref={menuRef}
            isEditable={isEditable}
          >
            <ColorIcon
              iconPath={MoreIcon}
              type="iconLv2"
              width="20px"
              height="20px"
            />
            {isMenuOpen && (
              <MenuList>
                <li>
                  <Link to="/MAKE-RE_ver2/write">이력서 수정</Link>
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
      {isModalOpen && (
        <DeleteModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      )}
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
  align-items: start;
  margin-bottom: 40px;
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
  position: absolute;
  top: ${(props) => (props.isEditable ? '0px' : '-12px')};
  right: -10px;
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
    border-radius: 8px;
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
      border-radius: 8px;
    }

    &:hover {
      background-color: var(--gray-lv1-color);
    }
  }
`
