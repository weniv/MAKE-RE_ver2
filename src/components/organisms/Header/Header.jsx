import { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Logo from '../../../assets/Logo.svg'
import ToggleBtn from '../../atoms/Button/ToggleBtn'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'
import LicatFace from '../../../assets/icon-liacat.svg'
import { ResumeContext } from '../../../context/ResumeContext'
import { MainBtn } from '../../atoms/Button'

export default function Header({ options }) {
  const { resumeData } = useContext(ResumeContext)
  const profileImg = resumeData['profile']['profileImg']
  const { isCenter, hasCreate, hasProfile, isWhite } = options
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  // 프로필 메뉴 외부 클릭 시 닫기
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
    <HeaderCont isWhite={isWhite}>
      <HeaderLayout isCenter={isCenter}>
        {isCenter ? (
          <h1>
            <Link to="/MAKE-RE_ver2/">
              <ColorIcon
                iconPath={Logo}
                width="176px"
                height="46px"
                type="logo"
              />
            </Link>
          </h1>
        ) : (
          <>
            <h1>
              <Link to="/MAKE-RE_ver2/">
                <ColorIcon
                  iconPath={Logo}
                  width="176px"
                  height="46px"
                  type="logo"
                />
              </Link>
            </h1>
            <BtnCont>
              {hasCreate && <MainBtn type="create">이력서 만들기</MainBtn>}
              {hasProfile && (
                <ProfileBtn
                  ref={menuRef}
                  onClick={handleToggleMenu}
                  isMenuOpen={isMenuOpen}
                >
                  <img alt="마이프로필" src={profileImg || LicatFace} />
                  {isMenuOpen && (
                    <MenuList>
                      <li>마이페이지</li>
                      <li>로그아웃</li>
                    </MenuList>
                  )}
                </ProfileBtn>
              )}
              <ToggleBtn />
            </BtnCont>
          </>
        )}
      </HeaderLayout>
    </HeaderCont>
  )
}

const HeaderCont = styled.header`
  width: 100vw;
  background-color: ${(props) =>
    props.isWhite ? 'var(--background-color)' : 'var(--gray-lv1-color)'};
  border-bottom: ${(props) =>
    props.isWhite ? '1px solid var(--gray-lv2-color)' : 'none'};
`

const HeaderLayout = styled.div`
  max-width: 1190px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) => (props.isCenter ? 'center' : 'space-between')};
  align-items: center;
`

const BtnCont = styled.div`
  display: flex;
  align-items: center;
`

const ProfileBtn = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--gray-lv2-color);
  background-color: var(--background-color);
  border: ${(props) =>
    props.isMenuOpen
      ? '2px solid var(--primary-color)'
      : '1px solid var(--gray-lv2-color)'};
  margin-left: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

const MenuList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 50%;
  transform: translateX(50%);
  width: 150px;
  background-color: var(--background-color);
  padding: 9px 8px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(71, 73, 77, 0.1);
  border: 1px solid var(--gray-lv2-color);

  li {
    color: var(--surface-color);
    font-size: 14px;
    padding: 5px 10px;
    line-height: 20px;
    text-align: left;
    border-radius: 10px;
    transition: background-color 0.1s ease-in;

    &:hover {
      background-color: var(--gray-lv1-color);
    }
  }
`
