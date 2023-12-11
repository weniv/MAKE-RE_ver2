import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function MyPageNav({ currentNaveItem }) {
  const [activeNavItem, setActiveNavItem] = useState(currentNaveItem)

  return (
    <Aside>
      <nav>
        <NavList>
          <NavItem
            isActive={activeNavItem === 0}
            onClick={() => {
              setActiveNavItem(0)
            }}
          >
            <Link to="/MAKE-RE_ver2/myresume">이력서 관리</Link>
          </NavItem>
          <NavItem
            isActive={activeNavItem === 1}
            onClick={() => {
              setActiveNavItem(1)
            }}
          >
            <Link to="/MAKE-RE_ver2/myprofile">프로필 페이지</Link>
          </NavItem>
        </NavList>
      </nav>
    </Aside>
  )
}

const Aside = styled.aside`
  min-width: 280px;
  padding: 20px;
  border-radius: 16px;
  background-color: var(--background-color);
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const NavItem = styled.li`
  border-radius: 10px;
  font-size: 14px;
  border: ${(props) => props.isActive && '2px solid var(--primary-color)'};
  background-color: ${(props) => props.isActive && 'var(--gray-lv1-color)'};

  &:hover {
    background-color: var(--gray-lv1-color);
  }

  a {
    display: inline-block;
    width: 100%;
    padding: 14px 16px;
  }
`
