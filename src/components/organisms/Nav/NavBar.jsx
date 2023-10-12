import { styled } from 'styled-components'
import NavList from '../../atoms/Nav/NavList'
import { useContext, useState, useRef, useEffect } from 'react'
import { remoteList } from '../../../data/dummy'
import { Dnd } from '../../../utils'
import RemoteContext from '../../../context/RemoteContext'

export default function NavBar({ type }) {
  const [isFill, setIsFill] = useState(false)
  const [list, setList] = useState(remoteList)

  const { currentSection, updateCurrentSection } = useContext(RemoteContext)

  const handleClickList = (item, idx) => {
    const val = {
      id: item.id,
      title: item.title,
    }
    updateCurrentSection(val)
  }

  return (
    <Dnd state={list} setState={setList}>
      <Nav>
        {list.map((item, idx) => {
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
  background-color: ${(props) => props.theme.background};
  border-radius: 16px;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`
