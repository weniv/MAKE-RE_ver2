import { styled } from 'styled-components'
import NavList from '../../atoms/Nav/NavList'

export default function NavBar({ type }) {
  return (
    <Nav>
      <NavList listName="프로필" clicked={true} />
      <NavList listName="자기소개서" />
      <NavList listName="커리어" />
      <NavList listName="프로젝트" />
      <NavList listName="경험" />
      <NavList listName="자격증" />
      <NavList listName="학력" />
      <NavList listName="추가 URL" />
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
