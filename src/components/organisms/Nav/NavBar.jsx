import { styled } from 'styled-components'
import NavList from '../../atoms/Nav/NavList'
import { useContext, useEffect, useState } from 'react'
import { Dnd } from '../../../utils'
import RemoteContext from '../../../context/RemoteContext'
import { saveData } from '../../../utils/saveData'
import { remoteList } from '../../../data/dummy'

export default function NavBar({ type }) {
  const resumeOrder = JSON.parse(localStorage.getItem('resumeOrder'))
  const [navList, setNavList] = useState(resumeOrder ? resumeOrder : remoteList)

  const { currentSection, updateCurrentSection } = useContext(RemoteContext)

  const handleClickList = (item, idx) => {
    const val = {
      id: item.id,
      title: item.title,
    }
    updateCurrentSection(val)
  }

  useEffect(() => {
    saveData('resumeOrder', JSON.stringify(navList))
  }, [navList])

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
