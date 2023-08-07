import { useState, useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import TriangleUp from '../../../assets/icon-triangle-up.svg'
import TriangleDown from '../../../assets/icon-triangle-down.svg'

export default function DropBox({
  type,
  width,
  list,
  setDomain,
  profileData,
  setProfileData,
}) {
  const [isSelected, setIsSelected] = useState()
  const [selectedData, setSelectedData] = useState(
    type === 'email' ? '직접 입력' : '신입'
  )
  // const previousData = null
  // const [selectedData, setSelectedData] = useState(
  //   previousData ? previousData : '직접 입력'
  // )

  // 첫 화면 렌더링 시 기존 경력 표시
  useEffect(() => {
    setTimeout(() => {
      setPreviousCareer()
    }, 500)
  }, [])

  // 경력 데이터 형식 변환 (Number -> String)
  function setPreviousCareer() {
    const length = profileData ? profileData.careerLength : 0
    if (type === 'career' && length) {
      switch (length) {
        case 1:
          setSelectedData('1년')
          break
        case 2:
          setSelectedData('2년')
          break
        case 3:
          setSelectedData('3년')
          break
        case 4:
          setSelectedData('4년')
          break
        case 5:
          setSelectedData('5년')
          break
        case 6:
          setSelectedData('6년')
          break
        case 7:
          setSelectedData('7년')
          break
        case 8:
          setSelectedData('8년')
          break
        case 9:
          setSelectedData('9년')
          break
        case 10:
          setSelectedData('10년')
          break
        default:
          setSelectedData('신입')
          break
      }
    }
  }

  // 경력 변경 시 프로필 업데이트
  function handleUpdateCareer(length) {
    setProfileData({ ...profileData, careerLength: length })
  }

  // 드롭박스 외부 클릭했을 시 닫기
  const dropBoxRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropBoxRef.current && !dropBoxRef.current.contains(e.target)) {
        setIsSelected(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [dropBoxRef])

  return (
    <DropBoxCont ref={dropBoxRef}>
      {!isSelected ? (
        <DropBtn
          width={width}
          onClick={() => {
            setIsSelected((isSelected) => !isSelected)
          }}
        >
          {selectedData}
          <img src={TriangleDown} />
        </DropBtn>
      ) : (
        <>
          <DropBtn
            width={width}
            onClick={() => {
              setIsSelected((isSelected) => !isSelected)
            }}
          >
            {selectedData}
            <img src={TriangleUp} />
          </DropBtn>
          {type === 'email' ? (
            <ListBox width={width}>
              {list.map((item, idx) => {
                return (
                  <List
                    key={idx}
                    onClick={() => {
                      setSelectedData(item)
                      setIsSelected(false)
                      setDomain(item === '직접 입력' ? '' : item)
                    }}
                  >
                    {item}
                  </List>
                )
              })}
            </ListBox>
          ) : (
            <ListBox width={width}>
              {list.map((item, idx) => {
                return (
                  <List
                    key={idx}
                    onClick={() => {
                      setSelectedData(item)
                      setIsSelected(false)
                      handleUpdateCareer(idx)
                    }}
                  >
                    {item}
                  </List>
                )
              })}
            </ListBox>
          )}
        </>
      )}
    </DropBoxCont>
  )
}

const DropBoxCont = styled.div`
  width: ${(props) => props.width}px;
`

const DropBtn = styled.button`
  width: ${(props) => props.width}px;
  color: var(--font-color);
  line-height: 20px;
  display: inline-flex;
  height: 42px;
  padding: 11px 10px 11px 16px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);

  &:focus {
    outline: 2px solid var(--main-color);
  }
`

const ListBox = styled.ul`
  width: ${(props) => props.width}px;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 8px;
  position: absolute;
  z-index: 10;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(71, 73, 77, 0.1);
`

const List = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--font-color);
  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 5px;
  border-radius: 8px;

  &:hover {
    background-color: var(--hover-color);
  }
`
