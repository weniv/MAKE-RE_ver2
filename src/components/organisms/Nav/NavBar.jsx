import { styled } from 'styled-components'
import NavList from '../../atoms/Nav/NavList'
import { useContext, useEffect, useRef, useState } from 'react'
import { Dnd } from '../../../utils'
import RemoteContext from '../../../context/RemoteContext'
import { ResumeContext } from '../../../context/ResumeContext'

export default function NavBar({
  type,
  profileRef,
  introRef,
  careerRef,
  projectRef,
  experienceRef,
  certificateRef,
  educationRef,
  urlRef,
}) {
  const [isFill, setIsFill] = useState(false)
  const { navList, setNavList } = useContext(ResumeContext)

  const { currentSection, updateCurrentSection } = useContext(RemoteContext)

  const handleClickList = (item, idx) => {
    const val = {
      id: item.id,
      title: item.title,
    }
    updateCurrentSection(val)

    console.log(item.title)
    if (type === 'preview') {
      // 스크롤이동 이벤트 구현
      switch (item.title) {
        case '자기소개서':
          return introRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        case '커리어':
          return careerRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        case '프로젝트':
          return projectRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        case '경험':
          return experienceRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        case '자격증':
          return certificateRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        case '교육':
          return educationRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        case '추가 URL':
          return urlRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
        default:
          return profileRef.current?.scrollIntoView({
            behavior: 'smooth',
          })
      }
    }
  }

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
