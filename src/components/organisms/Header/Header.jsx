import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Logo from '../../../assets/Logo.svg'
import ToggleBtn from '../../atoms/Button/ToggleBtn'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'

export default function Header() {
  return (
    <HeaderCont>
      <HeaderLayout>
        <h1>
          <Link to="/MAKE-RE_ver2/">
            <ColorIcon iconPath={Logo} width="176px" height="46px" />
            {/* <img src={Logo} alt="메이커리" /> */}
          </Link>
        </h1>
        <ToggleBtn />
      </HeaderLayout>
    </HeaderCont>
  )
}

const HeaderCont = styled.header`
  width: 100vw;
  background-color: var(--gray-lv1-color);
  position: fixed;
`

const HeaderLayout = styled.div`
  max-width: 1190px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
