import { styled } from 'styled-components'
import Logo from '../../../assets/Logo.svg'
import ToggleBtn from '../../atoms/Button/ToggleBtn'

export default function Header() {
  return (
    <HeaderCont>
      <HeaderLayout>
        <h1>
          <img src={Logo} alt="메이커리" />
        </h1>
        <ToggleBtn />
      </HeaderLayout>
    </HeaderCont>
  )
}

const HeaderCont = styled.header`
  width: 100vw;
  background-color: var(--hover-color);
`

const HeaderLayout = styled.div`
  max-width: 1250px;
  min-width: 768px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
