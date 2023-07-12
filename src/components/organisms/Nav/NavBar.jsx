import { styled } from 'styled-components'
import NavList from '../../atoms/Nav/NavList'
import { useState } from 'react'

const remoteList = [
  '프로필',
  '자기소개서',
  '커리어',
  '프로젝트',
  '경험',
  '자격증',
  '학력',
  '추가 URL',
]
export default function NavBar({ type }) {
  const [clickIdx, setClickIdx] = useState(0)
  const [isFill, setIsFill] = useState(false)

  return (
    <Nav>
      {remoteList.map((item, idx) => {
        return (
          <NavList
            clickIdx={clickIdx}
            listName={item}
            id={idx}
            isFill={isFill}
            type={type}
            onClick={() => {
              setClickIdx(idx)
            }}
          ></NavList>
        )
      })}
    </Nav>
  )
}

const Nav = styled.nav`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: var(--bg-color);
  border-radius: 16px;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`
