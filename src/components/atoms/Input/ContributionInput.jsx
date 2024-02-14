import React from 'react'
import { styled } from 'styled-components'
import MinusIcon from '../../../assets/icon-minus.svg'
import { updateArrdata } from '../../../utils'

export default function ContributionInput({
  id,
  idx,
  value,
  onClick,
  contributions,
  projectData,
  setProjectData,
}) {
  // const [inputText, setInputText] = useState(value)

  return (
    <Wrap>
      <Input
        id={`subtitle-${id}`}
        type="text"
        width="300px"
        name="contributes"
        value={value}
        placeholder="예) 스마트 컨트랙스 서버와 연동되는 웹 개발 전반"
        onChange={(e) => {
          updateArrdata(e, id, idx, contributions, projectData, setProjectData)
        }}
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
  border: 1px solid var(--gray-lv2-color);

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`

const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 11px;
  height: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`
