import { useState, useEffect, useRef, useContext } from 'react'
import * as styles from './Dropbox-style'
import ColorIcon from '../ColorIcon/ColorIcon'
import ThemeContext from '../../../context/ThemeContext'
import { ProfileContext } from '../../../context/ProfileContext'
import { theme } from '../../../theme/theme'
import TriangleUp from '../../../assets/icon-triangle-up.svg'
import TriangleDown from '../../../assets/icon-triangle-down.svg'
import { useProfileStore } from '../../../store/ProfileStore'

export default function DropBox({
  type,
  width,
  list,
  setDomain,
  setIsChange,
  isChange,
}) {
  const { profileTestData, updateProfileData } = useProfileStore()

  const { profileData, setProfileData } = useContext(ProfileContext)
  const domainText = profileData.fullEmail
    ? profileData.fullEmail.split('@')[1]
    : '직접 입력'
  const [isSelected, setIsSelected] = useState()
  const [selectedData, setSelectedData] = useState(
    type === 'email' ? domainText : '신입'
  )
  const { themeMode } = useContext(ThemeContext)
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
    <styles.DropBoxCont ref={dropBoxRef}>
      {!isSelected ? (
        <styles.DropBtn
          width={width}
          onClick={() => {
            setIsSelected((isSelected) => !isSelected)
          }}
        >
          {!isChange ? selectedData : '직접 입력'}

          <ColorIcon type="iconLv2" iconPath={TriangleDown} />
          {/* <img src={TriangleDown} /> */}
        </styles.DropBtn>
      ) : (
        <>
          <styles.DropBtn
            width={width}
            onClick={() => {
              setIsSelected((isSelected) => !isSelected)
            }}
            className="open"
          >
            {selectedData}
            <ColorIcon type="iconLv2" iconPath={TriangleUp} />
            {/* <img src={TriangleUp} /> */}
          </styles.DropBtn>
          {type === 'email' ? (
            <styles.ListBox width={width}>
              {list.map((item, idx) => {
                return (
                  <styles.List
                    key={idx}
                    onClick={() => {
                      setSelectedData(item)
                      setIsSelected(false)
                      setIsChange(false)
                      setDomain(item === '직접 입력' ? '' : item)
                    }}
                  >
                    {item}
                  </styles.List>
                )
              })}
            </styles.ListBox>
          ) : (
            <styles.ListBox width={width}>
              {list.map((item, idx) => {
                return (
                  <styles.List
                    key={idx}
                    onClick={() => {
                      setSelectedData(item)
                      setIsSelected(false)
                      handleUpdateCareer(idx)
                    }}
                  >
                    {item}
                  </styles.List>
                )
              })}
            </styles.ListBox>
          )}
        </>
      )}
    </styles.DropBoxCont>
  )
}
