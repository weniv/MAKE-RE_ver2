import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/Logo.svg'
import ToggleBtn from '../../atoms/Button/ToggleBtn'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'
import LicatFace from '../../../assets/icon-liacat.svg'
import { MainBtn } from '../../atoms/Button'
import * as styles from './Header-style'

export default function Header({ options }) {
  const storedDefaultData = JSON.parse(
    localStorage.getItem('makere-default-profile')
  )
  const profileImg = storedDefaultData.profileImg
  const { isCenter, hasCreate, hasProfile, isWhite } = options
  const navigate = useNavigate()

  const moveWrite = () => {
    navigate('/myresume')
  }

  const moveMypage = () => {
    navigate('/myresume')
  }

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
                <styles.ProfileBtn onClick={moveMypage}>
                  <img alt="마이프로필" src={profileImg || LicatFace} />
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
