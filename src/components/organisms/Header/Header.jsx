import { useState, useEffect, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/Logo.svg'
import ToggleBtn from '../../atoms/Button/ToggleBtn'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'
import LicatFace from '../../../assets/icon-liacat.svg'
import { ResumeContext } from '../../../context/ResumeContext'
import { MainBtn } from '../../atoms/Button'
import { ProfileContext } from '../../../context/ProfileContext'
import * as styles from './Header-style'

export default function Header({ options }) {
  const { resumeData } = useContext(ResumeContext)
  const { profileData } = useContext(ProfileContext)
  // const profileImg = resumeData['profile']['profileImg']
  const profileImg = profileData['profileImg']
  const { isCenter, hasCreate, hasProfile, isWhite } = options
  const [isMenuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const moveWrite = () => {
    navigate('/write')
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
    <styles.HeaderCont isWhite={isWhite}>
      <styles.HeaderLayout isCenter={isCenter}>
        {isCenter ? (
          <h1>
            <Link to="/">
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
              <Link to="/">
                <ColorIcon
                  iconPath={Logo}
                  width="176px"
                  height="46px"
                  type="logo"
                />
              </Link>
            </h1>
            <styles.BtnCont>
              {hasCreate && (
                <MainBtn type="create" onClick={moveWrite}>
                  이력서 만들기
                </MainBtn>
              )}
              {hasProfile && (
                <styles.ProfileBtn
                  onClick={handleToggleMenu}
                  isMenuOpen={isMenuOpen}
                >
                  <img alt="마이프로필" src={profileImg || LicatFace} />
                  {isMenuOpen && (
                    <styles.MenuList ref={menuRef}>
                      <styles.MenuItem>
                        <Link to="/myresume">마이페이지</Link>
                      </styles.MenuItem>
                      <styles.MenuItem>
                        <button>로그아웃</button>
                      </styles.MenuItem>
                    </styles.MenuList>
                  )}
                </styles.ProfileBtn>
              )}
              <ToggleBtn />
            </styles.BtnCont>
          </>
        )}
      </styles.HeaderLayout>
    </styles.HeaderCont>
  )
}
