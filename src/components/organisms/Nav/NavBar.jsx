import { styled } from 'styled-components'
import NavList from '../../atoms/Nav/NavList'
import { useContext, useEffect, useState } from 'react'
import { Dnd } from '../../../utils'
import RemoteContext from '../../../context/RemoteContext'
import { ResumeContext } from '../../../context/ResumeContext'
import { saveData } from '../../../utils/saveData'

export default function NavBar({ type }) {
  const [isFill, setIsFill] = useState(false)
  const { navList, setNavList } = useContext(ResumeContext)

  const { currentSection, updateCurrentSection } = useContext(RemoteContext)

  const handleClickList = (item, idx) => {
    const val = {
      id: item.id,
      title: item.title,
    }
    updateCurrentSection(val)
  }

  //새로고침해도 변경된 nav 순서가 유지되는것이 좋지않을까
  // useEffect(() => {
  //   saveData('resumeOrder', JSON.stringify(navList))
  // }, [navList])

  return (
    <Dnd state={navList} setState={setNavList}>
      <Nav>
        {navList.map((item, idx) => {
          return (
            <NavList
              clickIdx={currentSection.id}
              listName={item.title}
              idx={idx}
              key={item.id}
              id={item.id}
              isFill={isFill}
              type={type}
              onClick={() => {
                handleClickList(item, idx)
              }}
            ></NavList>
          )
        })}
      </Nav>
    </Dnd>
  )
}

const Nav = styled.nav`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 16px;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`
