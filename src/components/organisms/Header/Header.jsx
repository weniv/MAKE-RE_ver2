import { useState, useEffect, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/Logo.svg'
import ToggleBtn from '../../atoms/Button/ToggleBtn'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'
import LicatFace from '../../../assets/icon-liacat.svg'
import { ResumeContext } from '../../../context/ResumeContext'
import { MainBtn } from '../../atoms/Button'
import * as styles from './Header-style'
import axios from 'axios'

export default function Header({ options }) {
  const { resumeData } = useContext(ResumeContext)
  const profileImg = resumeData['profile']['profileImg']
  const { isCenter, hasCreate, hasProfile, isWhite } = options
  const [isMenuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const data = {
    account_id: 0,
    name: '',
    profiles: {
      resume_id: 0,
      profile_image: '',
      name: '',
      en_name: '',
      phone_number: '',
      email: '',
      blog_url: '',
      github_url: '',
      skills: [],
      career_years: 0,
    },
    introductions: {
      resume_id: 0,
      introduction: '',
    },
    careers: [
      {
        resume_id: 0,
        title: '',
        position: '',
        start_date: '',
        end_date: '',
        description: '',
      },
    ],
    projects: [
      {
        resume_id: 0,
        title: '',
        start_date: '',
        end_date: '',
        description: '',
        project_link: '',
        github_link: '',
        sns_link: '',
        skills: [],
        contributions: [],
        people: '',
      },
    ],
    experiences: [
      {
        resume_id: 0,
        title: '',
        start_date: '',
        end_date: '',
        description: '',
        link: '',
      },
    ],
    certificates: [
      {
        resume_id: 0,
        title: '',
        date: '',
        issuer: '',
        score: '',
      },
    ],
    educations: [
      {
        resume_id: 0,
        title: '',
        start_date: '',
        end_date: '',
        description: '',
      },
    ],
    urls: [
      {
        resume_id: 0,
        link: '',
        content: '',
      },
    ],
  }

  const createResume = async () => {
    console.log('이력서 만드는 메서드')
    // try {
    //   const result = await axios.get('/api/v1/resume?id=1')
    //   // navigate('/MAKE-RE_ver2/write')
    //   console.log('result', result)
    // } catch (err) {
    //   console.log('err', err)
    // }
  }

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  // const moveWrite = () => {
  //   createResume()
  //   navigate('/MAKE-RE_ver2/write')
  // }

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
              <Link to="/MAKE-RE_ver2">
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
                <MainBtn type="create" onClick={createResume}>
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
                        <Link to="/MAKE-RE_ver2/myresume">마이페이지</Link>
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
