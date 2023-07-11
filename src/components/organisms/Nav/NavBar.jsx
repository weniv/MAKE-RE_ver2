import { styled } from 'styled-components'
import NavList from '../../atoms/Nav/NavList'

export default function NavBar({ type }) {
  return (
    <Nav>
      <NavList listName="프로필" clicked={true} type={type} />
      <NavList listName="자기소개서" type={type} />
      <NavList listName="커리어" type={type} />
      <NavList listName="프로젝트" type={type} />
      <NavList listName="경험" type={type} />
      <NavList listName="자격증" type={type} />
      <NavList listName="학력" type={type} />
      <NavList listName="추가 URL" type={type} />
    </Nav>
  )
}

const Nav = styled.nav`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: var(-bg-color);
  border-radius: 16px;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`
