import { useState, useEffect, useRef } from 'react'
import * as styles from './Dropbox-style'
import ColorIcon from '../ColorIcon/ColorIcon'
import TriangleUp from '../../../assets/icon-triangle-up.svg'
import TriangleDown from '../../../assets/icon-triangle-down.svg'

const EmailDomainList = ['naver', 'daum', 'gmail']

export default function DropBox({
  type,
  width,
  list,
  emailDomain,
  setDomain,
  careerLength,
  setCareerLength,
}) {
  /**
   * 기본 제공되는 이메일 도메인을 사용하고 있는지 확인하는 함수
   * @param {string}  DomainList - 메이커리에서 기본 제공하는 이메일 도메인 리스트
   * @return {boolean} ture -기본 제공 도메인 / false - 커스텀 도메인
   */
  const checkIsCustomDomain = (DomainList) => {
    if (emailDomain) {
      return DomainList.some((domain) => emailDomain.includes(domain))
    } else {
      return ''
    }
  }

  const domainText = checkIsCustomDomain(EmailDomainList)
    ? emailDomain
    : '직접 입력'

  const [isSelected, setIsSelected] = useState()
  const [selectedData, setSelectedData] = useState(
    type === 'email' ? domainText : careerLength
  )

  useEffect(() => {
    setSelectedData(type === 'email' ? domainText : careerLength)
  }, [type, domainText, careerLength])

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
          {selectedData}
          <ColorIcon type="iconLv2" iconPath={TriangleDown} />
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
          </styles.DropBtn>
          {type === 'email' ? (
            // 이메일 드롭 박스
            <styles.ListBox width={width}>
              {list.map((item, idx) => {
                return (
                  <styles.List
                    key={idx}
                    onClick={() => {
                      setIsSelected(false)
                      setDomain(item === '직접 입력' ? '' : item)
                    }}
                  >
                    {item}
                  </styles.List>
                )
              })}
            </styles.ListBox>
          ) : (
            // 경력 드롭 박스
            <styles.ListBox width={width}>
              {list.map((item, idx) => {
                return (
                  <styles.List
                    key={idx}
                    onClick={() => {
                      setCareerLength(item === '신입' ? '신입' : item)
                      setIsSelected(false)
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
