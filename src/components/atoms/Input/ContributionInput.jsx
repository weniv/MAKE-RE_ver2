import React, { useEffect } from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import MinusIcon from '../../../assets/icon-minus.svg'

export default function ContributionInput({
  id,
  idx,
  value,
  onClick,
  contributes,
  projectData,
  setProjectData,
}) {
  const [inputText, setInputText] = useState(value)

  // contributes arr 내부 값 변경
  const updateContrib = (e) => {
    const newArr = [...contributes]
    setInputText(e.target.value)

    contributes.map((el, i) => {
      if (id === i) {
        newArr[i] = e.target.value
      }
      projectData[idx].contributes = newArr
      setProjectData([...projectData])
    })
  }

  // contributes arr 내부 값 삭제

  return (
    <Wrap>
      <Input
        id={`subtitle-${id}`}
        type="text"
        width="300px"
        name="contributes"
        value={inputText}
        placeholder="예) 스마트 컨트랙스 서버와 연동되는 웹 개발 전반"
        onChange={updateContrib}
        autoComplete="off"
      />
      {id !== 0 ? (
        <DeleteButton onClick={onClick}>
          <img src={MinusIcon} alt="삭제하기" />
        </DeleteButton>
      ) : null}
    </Wrap>
  )
}

ContributionInput.defaultProps = {
  id: 1,
  value: '',
  onClick: () => {},
}

// style
const Wrap = styled.div`
  position: relative;
  width: 688px;
  margin-bottom: 12px;
`

const Input = styled.input`
  width: 100%;
  padding: 11px 45px 11px 16px;
  border-radius: 10px;
  border: 1px solid var(--border-color);

  &:focus {
    outline: 2px solid var(--main-color);
  }
`

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 11px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`
