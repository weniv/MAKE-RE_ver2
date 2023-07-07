import { styled } from 'styled-components'
import TriangleDown from '../../../assets/icon-triangle-down.svg'
import TriangleUp from '../../../assets/icon-triangle-up.svg'
import { useEffect, useRef, useState } from 'react'

export default function DropBox({
  width,
  list,
  isSelected,
  setIsSelected,
  selectedData,
  setSelectedData,
  buttonOnClick,
}) {
  // 아래 코드를 부모 컴포넌트에서 작성할 수 있도록
  //   const [selectedData, setSelectedData] = useState(
  //     previousData ? previousData : placeHolder
  //   )

  // props 예시
  //   <DropBox
  //     width={131}
  //     list={['naver.com', 'daum.net', 'gmail.com']}
  //     isSelected={isSelected}
  //     setIsSelected={setIsSelected}
  //     selectedData={selectedData}
  //     setSelectedData={setSelectedData}
  //     buttonOnClick={handleClickBtn}
  //   />

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
    <DropBoxCont width={width} ref={dropBoxRef}>
      {!isSelected ? (
        <DropBtn onClick={buttonOnClick}>
          {selectedData}
          <img src={TriangleDown} />
        </DropBtn>
      ) : (
        <>
          <DropBtn onClick={buttonOnClick}>
            {selectedData}
            <img src={TriangleUp} />
          </DropBtn>
          <ListBox>
            {list.map((item, idx) => {
              return (
                <List
                  key={idx}
                  onClick={() => {
                    setSelectedData(item)
                    setIsSelected(false)
                  }}
                >
                  {item}
                </List>
              )
            })}
          </ListBox>
        </>
      )}
    </DropBoxCont>
  )
}

const DropBoxCont = styled.div`
  width: ${(props) => props.width}px;
`

const DropBtn = styled.button`
  width: 100%;
  color: var(--font-color);
  line-height: 20px;
  display: inline-flex;
  height: 42px;
  padding: 11px 10px 11px 16px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);
`

const ListBox = styled.ul`
  box-sizing: border-box;
  margin-top: 5px;
  width: 100%;
  padding: 8px;
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
