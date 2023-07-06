import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import MinusIcon from '../../../assets/icon-minus.svg'

export default function ContributionInput({ id, value, onClick }) {
  const [inputText, setInputText] = useState(value)

  function handleChange(e) {
    setInputText(e.target.value)
  }

  return (
    <Wrap>
      <Input
        id={`subtitle-${id}`}
        type="text"
        width="300px"
        placeholder="예) 스마트 컨트랙스 서버와 연동되는 웹 개발 전반"
        value={inputText}
        onChange={handleChange}
      />
      {id !== 1 ? (
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
